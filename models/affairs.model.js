module.exports = (sequelize, Sequelize) => {

  const { DataTypes } = Sequelize

  const options = {
    indexes: [
      {
        unique: false,
        fields: ['gas_id']
      }
    ]
  }


  const Affairs = sequelize.define("gas_acts", {
    "gas_id": DataTypes.STRING,

    // Территория
    "case_doc_district_rf": DataTypes.STRING(9000),
    "case_doc_subject_rf": DataTypes.STRING(9000),
    "case_regbasenum": DataTypes.STRING(9000),
    "case_doc_subject_number": DataTypes.STRING(9000),
    "case_court_type_cat": DataTypes.STRING(9000),
    "case_common_doc_court": DataTypes.STRING(9000),
    "case_doc_vnkod": DataTypes.STRING(9000),
    "case_doc_instance": DataTypes.STRING(9000),

    // Даты
    "case_common_doc_validity_date": DataTypes.DATE,
    "case_doc_load_date": DataTypes.DATE,
    "case_document_load_date": DataTypes.DATE,
    "case_user_doc_entry_date": DataTypes.DATE,
    "case_common_doc_entry_date": DataTypes.DATE,
    "case_document_publ_date": DataTypes.DATE,
    "case_common_doc_result_date": DataTypes.DATE,
    "case_hear_date": DataTypes.DATE,
    "case_document_result_date": DataTypes.DATE,
    "timestamp": DataTypes.DATE,
    // Информация по делу
    "case_document_num_build": DataTypes.STRING(9000),
    "case_doc_source": DataTypes.STRING(9000),
    "case_doc_source_table": DataTypes.STRING(9000),
    "case_doc_kind": DataTypes.STRING(9000),
    "case_doc_kind_short": DataTypes.STRING(9000),
    "court_deside": DataTypes.STRING(9000),
    "case_user_document_num": DataTypes.STRING(9000),
    "case_document_categorys": DataTypes.STRING(9000),
    "case_common_document_type": DataTypes.STRING(9000),
    "case_common_document_num": DataTypes.STRING(9000),

    "case_document_category_article": DataTypes.ARRAY(DataTypes.TEXT), // ARRAY ARRAY
    "case_document_articles": DataTypes.STRING(9000),
    "case_id": DataTypes.STRING(9000),
    "case_id_region": DataTypes.STRING(9000),
    "case_document_id": DataTypes.STRING(9000),
    "case_user_document_text_tag": DataTypes.TEXT, //!!!
    "case_common_judge": DataTypes.STRING(9000),
    "case_document_result": DataTypes.STRING(9000),
    "case_common_doc_result": DataTypes.STRING(9000),
    "name": DataTypes.STRING(9000),
    "case_common_doc_number": DataTypes.STRING(9000),
    // Дата события	Время события	Наименование события	Результат события	Основания для результата	Зал
    "case_common_event_m2": DataTypes.ARRAY(DataTypes.TEXT),// ARRAY ARRAY
    // Вид участника производства	ФИО или наименование
    "case_common_parts_m2_search": DataTypes.ARRAY(DataTypes.TEXT),//  ARRAY ARRAY

    // Дела федеральных судов общей юрисдикции
    // -- Гражданские и административные дела  
    // -- Дела об административных правонарушениях  
    "adm_case_pr_number": DataTypes.STRING(9000),
    "adm_case_common_article": DataTypes.STRING(9000),

    // -- Уголовные дела  
    "u_case_common_article": DataTypes.STRING(9000),
    // ФИО	Перечень всех статей	Результат
    "u_common_case_defendant_m": DataTypes.ARRAY(DataTypes.TEXT),// ARRAY ARRAY

    // -- Производство по материалам  
    "m_case_common_type": DataTypes.STRING(9000),
    "m_case_common_sub_type": DataTypes.STRING(9000),

    // Дела судебных участков мировых судей 
    // -- Гражданские и административные дела  
    "court_oktmo": DataTypes.STRING(9000),
    "check_type": DataTypes.STRING(9000),
    "court_city": DataTypes.STRING(9000),

    // -- Дела об административных правонарушениях  
    "court_area": DataTypes.STRING(9000),
    "court_area2": DataTypes.STRING(9000),
    "court_adress": DataTypes.STRING(9000),
    "court_city2": DataTypes.STRING(9000),

    // -- Уголовные дела  
    // -- Производство по материалам  

    // Акты Верховного Суда РФ 
    // -- Гражданские и административные дела ВС РФ
    "court_event_event_name": DataTypes.STRING(9000),
    "ora_I_num_case": DataTypes.STRING(9000),
    "court_parts_claimant": DataTypes.STRING(9000),
    "ora_essence_claim": DataTypes.STRING(9000),
    "court_fio_member": DataTypes.ARRAY(DataTypes.TEXT),// ARRAY?
    "court_parts_respondent": DataTypes.ARRAY(DataTypes.TEXT),// ARRAY
    "court_parts_third_party": DataTypes.ARRAY(DataTypes.TEXT),// ARRAY?
    "ora_reason": DataTypes.STRING(9000),

    // -- Уголовные дела ВС РФ
    "ora_convicted": DataTypes.STRING(9000),
    "case_user_doc_result": DataTypes.STRING(9000),

    // -- Дела об административных правонарушениях ВС РФ
    "ora_I_judge": DataTypes.STRING(9000),

    // -- Экономические споры ВС РФ
    "ora_kas_num_case": DataTypes.STRING(9000),
    "eco_category": DataTypes.STRING(9000),
    "eco_category2": DataTypes.STRING(9000),
    "ora_app_num_case": DataTypes.STRING(9000),
    "ora_text_tag": DataTypes.TEXT,// !! 

    // -- Дисциплинарные споры ВС РФ
    "court_document_documentext1_tag": DataTypes.TEXT,// !!!
    "dis_category2": DataTypes.STRING(9000),
    "case_user_document_type": DataTypes.STRING(9000),
    "dis_category": DataTypes.STRING(9000),
    "dis_colleg": DataTypes.STRING(9000),

    "court_document_documentext1_tag_clear": DataTypes.TEXT,
    "ora_text_tag_clear": DataTypes.TEXT,
    "case_user_document_text_tag_clear": DataTypes.TEXT,

  }, { createdAt: false, updatedAt: false, ...options });

  return Affairs;

};


indexes: [
  {
    unique: false,
    fields: ['gas_id']
  }
]