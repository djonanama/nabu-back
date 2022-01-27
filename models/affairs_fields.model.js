module.exports = () => {

  const fields ={
    "case_doc_district_rf": "Округ РФ",
    "case_doc_subject_rf": "Субъект РФ",
    "case_regbasenum": "Уровень по субъекту",
    "case_doc_subject_number": "Код субъекта РФ",
    "case_court_type_cat": "Уровень суда",
    "case_common_doc_court": "Наименование суда",
    "case_doc_vnkod": "Код суда",
    "case_doc_instance": "Инстанция",

    // Даты
    "case_common_doc_validity_date": 'Дата вступления в силу',
    "case_doc_load_date": 'Дата загрузки дела',
    "case_document_load_date": 'Дата загрузки судебного акта',
    "case_common_doc_entry_date": 'Дата поступления',
    // "case_user_doc_entry_date": 'Дата поступления', // ?
    "case_document_publ_date": 'Дата публикации',
    "case_common_doc_result_date": 'Дата решения',
    "case_hear_date": 'Дата слушания',
    "case_document_result_date": 'Дата судебного акта',
    // "timestamp": 'Дата индексирования',
    // Информация по делу
    "case_document_num_build": 'num_build',
    "case_doc_source": 'Источник',
    "case_doc_source_table": 'Источник (префикс таблиц',
    "case_doc_kind": 'Вид судопроизводства',
    "case_doc_kind_short": 'Вид судопроизводства (короткое)',
    // "court_deside": 'Дела с решением',
    // "case_user_document_num": 'Дела с текстом судебного акта',
    "case_document_categorys": 'Категории',
    "case_common_document_type": 'Тип документа',
    "case_common_document_num": 'Количество судебных актов',

    "case_document_category_article": "Статья или категория",//  ARRAY ARRAY
    "case_document_articles": 'Статьи закона',
    "case_id": 'Идентификатор дела',
    "case_id_region": 'Идентификатор дела в субъекте',
    "case_document_id": 'Идентификатор судебного акта',
    "case_user_document_text_tag": 'Текст документа',
    "case_common_judge": 'Судья',
    "case_document_result": 'Решение',
    "case_common_doc_result": 'Результат',
    "name": 'Название',
    "case_common_doc_number": 'Номер дела (материала)',
    // Дата события	Время события	Наименование события	Результат события	Основания для результата	Зал
    "case_common_event_m2": 'Движение дела',// ARRAY ARRAY
    // Вид участника производства	ФИО или наименование
    "case_common_parts_m2_search": 'Стороны по делу',//  ARRAY ARRAY

    // Дела федеральных судов общей юрисдикции
    // -- Гражданские и административные дела  
    // -- Дела об административных правонарушениях  
    "adm_case_pr_number": 'Номер протокола (постановления) об АП',
    "adm_case_common_article": "Статья КоАП, другой закон",

    // -- Уголовные дела  
    "u_case_common_article": 'Статья УК РФ',
    // ФИО	Перечень всех статей	Результат
    "u_common_case_defendant_m": 'Лица',// ARRAY ARRAY

    // -- Производство по материалам  
    "m_case_common_type": 'Вид производства',
    "m_case_common_sub_type": "Предмет",

    // Дела судебных участков мировых судей 
    // -- Гражданские и административные дела  
    "court_oktmo": 'ОКТМО',
    "check_type": 'Категория ошибки',
    "court_city": 'Населенный пункт',

    // -- Дела об административных правонарушениях  
    "court_area": 'Район',
    "court_area2": 'Район АМО',
    "court_adress": 'Полный адрес суда',
    "court_city2": 'Населенный пункт',

    // -- Уголовные дела  
    // -- Производство по материалам  

    // Акты Верховного Суда РФ 
    // -- Гражданские и административные дела ВС РФ
    "court_event_event_name": 'Движение по делу',
    "ora_I_num_case": 'Информация по номеру дела (1-я инстанция)',
    "court_parts_claimant": 'Истец',
    "ora_essence_claim": 'Краткая сущность иска',
    "court_fio_member": 'Лица по делу',//ARRAY?
    "court_parts_respondent": 'Ответчик',// ARRAY
    "court_parts_third_party": 'Третье лицо',// ARRAY?
    "ora_reason": 'Причина',

    // -- Уголовные дела ВС РФ
    "ora_convicted": 'Сторона (осужденный)',
    "case_user_doc_result": 'Результат',

    // -- Дела об административных правонарушениях ВС РФ
    "ora_I_judge": 'Судья (1-я инстанция)',

    // -- Экономические споры ВС РФ
    "ora_kas_num_case":"Номер дела (кассация)",
    "eco_category": "Категория экономических споров",
    "eco_category2": "Тип экономических споров",
    "ora_app_num_case": "Номер дела (апелляция)",
    "ora_text_tag": "Текст pdf-документа",// !! 

    // -- Дисциплинарные споры ВС РФ
    "court_document_documentext1_tag": 'Текст документа', //!!!
    "dis_category2": 'Тип дисциплинарных споров',
    "case_user_document_type": 'Тип документа',
    "dis_category": 'Категория дисциплинарных споров',
    "dis_colleg": 'Коллегия',

  }

  return fields;

};
