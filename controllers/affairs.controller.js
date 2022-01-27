const {clickhouse} = require("../models");
const moment = require('moment');

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  let limit = 20;
  let offset = 0;

  let where = ''

  if(req.query.limit && Number(req.query.limit) >= 0 ){
    limit = Number(req.query.limit);
  }

  if(req.query.offset && Number(req.query.offset) >= 0 ){
    offset = Number(req.query.offset);
  }

  if(req.query.is_act && (req.query.is_act == 'true' || req.query.is_act === true)){
    where += ` AND isNotNull(case_user_document_num) `;
  }

  if(req.query.doc_entry_date_start || req.query.doc_entry_date_end){
    let start = moment(req.query.doc_entry_date_start,"DD.MM.YYYY")
    start =  start.isValid() ?  start.format("YYYY-MM-DD") : "2999-01-01"

    let end = moment(req.query.doc_entry_date_end,"DD.MM.YYYY")
    end =  end.isValid() ?  end.format("YYYY-MM-DD") : "2999-01-01"
  
    where += ` AND case_common_doc_entry_date between toDateTimeOrNull('${start}') AND toDateTimeOrNull('${end}') `;
  }

  if(req.query.doc_result_date_start || req.query.doc_result_date_end){
    let start = moment(req.query.doc_result_date_start,"DD.MM.YYYY")
    start =  start.isValid() ?  start.format("YYYY-MM-DD") : "2999-01-01"

    let end = moment(req.query.doc_result_date_end,"DD.MM.YYYY")
    end =  end.isValid() ?  end.format("YYYY-MM-DD") : "2999-01-01"
  
    where += ` AND case_common_doc_result_date between toDateTimeOrNull('${start}') AND toDateTimeOrNull('${end}') `;
  }

  if(req.query.find){
    where += ` AND (case_document_articles ILIKE '%${req.query.find}%' OR name ILIKE '%${req.query.find}%') `;
  }

  console.log(req.query)

  let query = `
    SELECT id, name, case_document_articles,case_common_doc_entry_date,case_common_doc_result_date FROM affairs WHERE 1=1 ${where} ORDER BY case_common_doc_entry_date LIMIT ${limit} OFFSET ${offset} 
  `
  let query_cnt = `
    SELECT count(*) as cnt FROM affairs WHERE 1=1 ${where}
  `
  console.log(query)

   Promise.all ([

    clickhouse.query(query).toPromise(),
    clickhouse.query(query_cnt).toPromise(),

  ]).then(([data, cnt]) => {
      res.send({data,cnt:cnt[0].cnt,limit,offset});
    })
    .catch(err => {
      res.status(500).send({
        message:
          (err.message || "Some error occurred while retrieving affairs.")+query_cnt
      });
    });
};

// Find a single Affairs with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  let query = `
    SELECT * FROM affairs WHERE id = ${id || 0}
  `
  const rows = clickhouse.query(query).toPromise();

  rows.then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Affairs with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Affairs with id=" + id
      });
    });
};