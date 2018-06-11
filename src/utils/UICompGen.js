/**
 *This class will help us by doing the below
 * Based on UI TYpe IT will generate the UI component
 * TODO:IN FUture we will make this class to use context aswell to treat different forammtting of data
 * and generate the visuals
 *
 * Sample data taht gets passed to this class
 * {
    "query": {
        "request_for": "segmentation",
        "is_query_response": "false",
        "segmentation": {
            "queries": {
                "Q1": {
                    "value": "{{scope_doc_id_value}}",
                    "node_id": "doc_id",
                    "field": "{{scope_doc_id}}",
                    "search_type": "E"
                }
            },
            "fields_include": [
                "orders"
            ],
            "search_scheme": {
                "key": "( Q1 )"
            }
        }
    },
    "config": {
        "index_name": "enduser",
        "ui_insight_shortcut": "true",
        "ui_shortcut_label": "Order List",
        "ui_group_name": "Orders",
        "ui_ww_scope": "ww",
        "query_type": "query",
        "ui_label": "Orders List",
        "ui_dataset_name": "orders",
        "ui_order": 4,
        "ui_tooltip": "Orders ",
        "ui_perspective_srch_tooltip": "Order List",
        "ui_chart_title": "Orders List ",
        "ui_icon": "two",
        "ui_visualization": {
            "theme": "grid",
            "ui_schema_reference": "orders",
            "ui_schema_perspective": "enduser",
            "ui_show_flag_desc": "true"
        }
    },
    "data": {
        "country": "india",
        "country_code": "in",
        "additional_info": {
            "org_relevance_flag": [
                "dead"
            ]
        },
        "class_id": "o.13948-124.46.1",
        "orders": [
            {
                "acv_usd": 0,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 0,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "tech pacific india ltd.",
                "eu_contact": "mr chandrasekaran",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "brightstor arcserve backup r11.5 client agent for unix - multi-language",
                "sku": "babwbr1150f19c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "chandra.sekarana@wipro.com",
                "res_email": "ramasubramanian.sriram@wirpo.com",
                "bookings_usd": 1147.1,
                "maint_start_dt": "2008-12-30t00:00:00.000z",
                "order_dt": "2008-12-30t00:00:00.000z",
                "product_feature": "client agent for unix",
                "acv_mr_local": 0,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 5,
                "maint_end_dt": "2009-12-01t00:00:00.000z",
                "order_no": "ol1242833",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "11.5",
                "acv_local": 0,
                "res_zip": "605102",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "chandrasekaran",
                "list_price": 0,
                "eu_state": "null",
                "order_fy": 2009,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 0,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 9,
                "product_solutions2": "bu",
                "res_name": "wipro technologies",
                "acv_lic_local": 0,
                "acv_mr_usd": 0,
                "migration_by_month": "new logo",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "loganathan srinivasan",
                "eu_phone": "080-30299667",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for laptops & desktops r11.5 10 user multi-language",
                "sku": "bablad10r11500c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "loganathan.srinivasan@wipro.com",
                "res_email": "eshwari.mallikarjuna@wipro.com",
                "bookings_usd": 575,
                "maint_start_dt": "2007-09-11t00:00:00.000z",
                "order_dt": "2007-09-11t00:00:00.000z",
                "product_feature": "laptops & desktops users",
                "acv_mr_local": 0,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 2,
                "maint_end_dt": "2008-09-01t00:00:00.000z",
                "order_no": "ol1046657",
                "res_country": "india",
                "order_fq": 2,
                "eu_name": "wipro limited",
                "license_no": "",
                "contract_number": "",
                "currency": "usd",
                "first_name": "loganathan",
                "eu_country": "india",
                "product_version": "11.5",
                "acv_local": 0,
                "res_zip": "560066",
                "eu_zip": "560035",
                "sku_type": "full/boxed",
                "last_name": "srinivasan",
                "list_price": 0,
                "eu_state": "null",
                "order_fy": 2008,
                "eu_city": "bangalore"
            },
            {
                "acv_usd": 0,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 0,
                "migration_by_month": "return",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "sriram.c",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r15.0 for windows esd for india - product only",
                "sku": "mkcaab15esdintc",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramasubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 0,
                "maint_start_dt": "2010-12-30t00:00:00.000z",
                "order_dt": "2010-12-30t00:00:00.000z",
                "product_feature": "arcserve backup for windows",
                "acv_mr_local": 0,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 1,
                "maint_end_dt": "2011-12-30t00:00:00.000z",
                "order_no": "ol1490632",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited",
                "license_no": "pacc783439",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sriram.c",
                "eu_country": "india",
                "product_version": "15",
                "acv_local": 0,
                "res_zip": "560027",
                "eu_zip": "560100",
                "sku_type": "media kit",
                "last_name": "",
                "list_price": 0,
                "eu_state": "null",
                "order_fy": 2011,
                "eu_city": "."
            },
            {
                "acv_usd": 1733.7,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro ltd (infotech group)",
                "acv_lic_local": 1284.7199,
                "acv_mr_usd": 448.9801,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "ingram micro india ltd.",
                "eu_contact": "mr sriram",
                "eu_phone": "80 30299656",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r12.5 for windows agent for microsoft sql server",
                "sku": "babwbr1250w17c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramsubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 1733.7,
                "maint_start_dt": "2009-12-29t00:00:00.000z",
                "order_dt": "2009-12-30t00:00:00.000z",
                "product_feature": "windows agent for microsoft sql server",
                "acv_mr_local": 448.9801,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 1284.7199,
                "qty": 3,
                "maint_end_dt": "2010-12-28t00:00:00.000z",
                "order_no": "ol1372261",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "12.5",
                "acv_local": 1733.7,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "sriram",
                "list_price": 0,
                "eu_state": "null",
                "order_fy": 2010,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 3441.3,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro ltd (infotech group)",
                "acv_lic_local": 2550.1084,
                "acv_mr_usd": 891.1916,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "ingram micro india ltd.",
                "eu_contact": "mr sriram",
                "eu_phone": "80 30299656",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r12.5 client agent for windows",
                "sku": "babwbr1250w22c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramsubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 3441.3,
                "maint_start_dt": "2009-12-29t00:00:00.000z",
                "order_dt": "2009-12-30t00:00:00.000z",
                "product_feature": "client agent for windows",
                "acv_mr_local": 891.1916,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 2550.1084,
                "qty": 15,
                "maint_end_dt": "2010-12-28t00:00:00.000z",
                "order_no": "ol1372261",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "12.5",
                "acv_local": 3441.3,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "sriram",
                "list_price": 0,
                "eu_state": "null",
                "order_fy": 2010,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 0,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 0,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "tech pacific india ltd.",
                "eu_contact": "mr chandrasekaran",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r12 for windows",
                "sku": "babwbr1200w00c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "chandra.sekarana@wipro.com",
                "res_email": "ramasubramanian.sriram@wirpo.com",
                "bookings_usd": 450.12,
                "maint_start_dt": "2008-12-30t00:00:00.000z",
                "order_dt": "2008-12-30t00:00:00.000z",
                "product_feature": "arcserve backup for windows",
                "acv_mr_local": 0,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 1,
                "maint_end_dt": "2009-12-01t00:00:00.000z",
                "order_no": "ol1242833",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "12.0",
                "acv_local": 0,
                "res_zip": "605102",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "chandrasekaran",
                "list_price": 0,
                "eu_state": "null",
                "order_fy": 2009,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 0,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 0,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "tech pacific india ltd.",
                "eu_contact": "mr chandrasekaran",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r12 for windows agent for microsoft sql server",
                "sku": "babwbr1200w17c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "chandra.sekarana@wipro.com",
                "res_email": "ramasubramanian.sriram@wirpo.com",
                "bookings_usd": 4045.3,
                "maint_start_dt": "2008-12-30t00:00:00.000z",
                "order_dt": "2008-12-30t00:00:00.000z",
                "product_feature": "windows agent for microsoft sql server",
                "acv_mr_local": 0,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 7,
                "maint_end_dt": "2009-12-01t00:00:00.000z",
                "order_no": "ol1242833",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "12.0",
                "acv_local": 0,
                "res_zip": "605102",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "chandrasekaran",
                "list_price": 0,
                "eu_state": "null",
                "order_fy": 2009,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 0,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 0,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "tech pacific india ltd.",
                "eu_contact": "mr chandrasekaran",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r12 client agent for windows",
                "sku": "babwbr1200w22c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "chandra.sekarana@wipro.com",
                "res_email": "ramasubramanian.sriram@wirpo.com",
                "bookings_usd": 4356,
                "maint_start_dt": "2008-12-30t00:00:00.000z",
                "order_dt": "2008-12-30t00:00:00.000z",
                "product_feature": "client agent for windows",
                "acv_mr_local": 0,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 30,
                "maint_end_dt": "2009-12-01t00:00:00.000z",
                "order_no": "ol1242833",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "12.0",
                "acv_local": 0,
                "res_zip": "605102",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "chandrasekaran",
                "list_price": 0,
                "eu_state": "null",
                "order_fy": 2009,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 20778.3008,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro ltd (infotech group)",
                "acv_lic_local": 15397.3083,
                "acv_mr_usd": 5380.9924,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "ingram micro india ltd.",
                "eu_contact": "mr sriram",
                "eu_phone": "80 30299656",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r12.5 agent for open files on windows",
                "sku": "babwbr1250w09c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramsubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 20778.3,
                "maint_start_dt": "2009-12-29t00:00:00.000z",
                "order_dt": "2009-12-30t00:00:00.000z",
                "product_feature": "agent for open files on windows",
                "acv_mr_local": 5380.9924,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 15397.3083,
                "qty": 45,
                "maint_end_dt": "2010-12-28t00:00:00.000z",
                "order_no": "ol1372261",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "12.5",
                "acv_local": 20778.3007,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "sriram",
                "list_price": 0,
                "eu_state": "null",
                "order_fy": 2010,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 116.25,
                "bookings_local": 116.25,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 116.25,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "sriram.c",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s00cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramasubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 116.25,
                "maint_start_dt": "2010-12-30t00:00:00.000z",
                "order_dt": "2010-12-30t00:00:00.000z",
                "product_feature": "arcserve backup for windows",
                "acv_mr_local": 116.25,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 1,
                "maint_end_dt": "2011-12-29t00:00:00.000z",
                "order_no": "ol1490632",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited",
                "license_no": "pacc783439",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sriram.c",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 116.25,
                "res_zip": "560027",
                "eu_zip": "560100",
                "sku_type": "maintenance renewal",
                "last_name": "",
                "list_price": 155,
                "eu_state": "null",
                "order_fy": 2011,
                "eu_city": "."
            },
            {
                "acv_usd": 149.25,
                "bookings_local": 149.25,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 0,
                "acv_mr_usd": 149.25,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows tape library option - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s01cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 149.25,
                "maint_start_dt": "2011-12-30t00:00:00.000z",
                "order_dt": "2012-01-11t00:00:00.000z",
                "product_feature": "windows tape library option",
                "acv_mr_local": 149.25,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 1,
                "maint_end_dt": "2012-12-29t00:00:00.000z",
                "order_no": "ol1591460",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 149.25,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 199,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            },
            {
                "acv_usd": 5366.25,
                "bookings_local": 5366.25,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 0,
                "acv_mr_usd": 5366.25,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup agent for open files on windows - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s09cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 5366.25,
                "maint_start_dt": "2011-12-30t00:00:00.000z",
                "order_dt": "2012-01-11t00:00:00.000z",
                "product_feature": "agent for open files on windows",
                "acv_mr_local": 5366.25,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 45,
                "maint_end_dt": "2012-12-29t00:00:00.000z",
                "order_no": "ol1591460",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 5366.25,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 159,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            },
            {
                "acv_usd": 5970,
                "bookings_local": 5970,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 0,
                "acv_mr_usd": 5970,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows agent for microsoft sql server - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s17cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 5970,
                "maint_start_dt": "2011-12-30t00:00:00.000z",
                "order_dt": "2012-01-11t00:00:00.000z",
                "product_feature": "windows agent for microsoft sql server",
                "acv_mr_local": 5970,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 40,
                "maint_end_dt": "2012-12-29t00:00:00.000z",
                "order_no": "ol1591460",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 5970,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 199,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            },
            {
                "acv_usd": 592.5,
                "bookings_local": 592.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 0,
                "acv_mr_usd": 592.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup client agent for unix - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s19cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 592.5,
                "maint_start_dt": "2011-12-30t00:00:00.000z",
                "order_dt": "2012-01-11t00:00:00.000z",
                "product_feature": "client agent for unix",
                "acv_mr_local": 592.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 10,
                "maint_end_dt": "2012-12-29t00:00:00.000z",
                "order_no": "ol1591460",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 592.5,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 79,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            },
            {
                "acv_usd": 4147.5,
                "bookings_local": 4147.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 0,
                "acv_mr_usd": 4147.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup client agent for windows - maintenance renewal - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb20w22cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 4147.5,
                "maint_start_dt": "2011-12-30t00:00:00.000z",
                "order_dt": "2012-01-11t00:00:00.000z",
                "product_feature": "client agent for windows",
                "acv_mr_local": 4147.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 70,
                "maint_end_dt": "2012-12-29t00:00:00.000z",
                "order_no": "ol1591460",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 4147.5,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 79,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            },
            {
                "acv_usd": 1268.4,
                "bookings_local": 1268.4,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 1268.4,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "ramesh b l",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "brightstor arcserve backup  for unix agent for oracle for solaris - 1 year enterprise maintenance renewal",
                "sku": "gmrbabsb10s16cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramesh.lakshman@wipro.com",
                "res_email": "hmoshinkhan@gmail.com",
                "bookings_usd": 1268.4,
                "maint_start_dt": "2013-01-16t00:00:00.000z",
                "order_dt": "2012-12-28t00:00:00.000z",
                "product_feature": "unix agent for oracle",
                "acv_mr_local": 1268.4,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 4,
                "maint_end_dt": "2014-01-15t00:00:00.000z",
                "order_no": "ol1657893",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "ramesh",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 1268.4,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 422.8,
                "eu_state": "",
                "order_fy": 2013,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 232.5,
                "bookings_local": 232.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 232.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "ramesh b l",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s00cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramesh.lakshman@wipro.com",
                "res_email": "hmoshinkhan@gmail.com",
                "bookings_usd": 232.5,
                "maint_start_dt": "2013-01-16t00:00:00.000z",
                "order_dt": "2012-12-28t00:00:00.000z",
                "product_feature": "arcserve backup for windows",
                "acv_mr_local": 232.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 2,
                "maint_end_dt": "2014-01-15t00:00:00.000z",
                "order_no": "ol1657893",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "ramesh",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 232.5,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 155,
                "eu_state": "",
                "order_fy": 2013,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 298.5,
                "bookings_local": 298.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 298.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "ramesh b l",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows tape library option - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s01cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramesh.lakshman@wipro.com",
                "res_email": "hmoshinkhan@gmail.com",
                "bookings_usd": 298.5,
                "maint_start_dt": "2013-01-16t00:00:00.000z",
                "order_dt": "2012-12-28t00:00:00.000z",
                "product_feature": "windows tape library option",
                "acv_mr_local": 298.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 2,
                "maint_end_dt": "2014-01-15t00:00:00.000z",
                "order_no": "ol1657893",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "ramesh",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 298.5,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 199,
                "eu_state": "",
                "order_fy": 2013,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 5604.75,
                "bookings_local": 5604.75,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 5604.75,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "ramesh b l",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup agent for open files on windows - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s09cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramesh.lakshman@wipro.com",
                "res_email": "hmoshinkhan@gmail.com",
                "bookings_usd": 5604.75,
                "maint_start_dt": "2013-01-16t00:00:00.000z",
                "order_dt": "2012-12-28t00:00:00.000z",
                "product_feature": "agent for open files on windows",
                "acv_mr_local": 5604.75,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 47,
                "maint_end_dt": "2014-01-15t00:00:00.000z",
                "order_no": "ol1657893",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "ramesh",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 5604.75,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 159,
                "eu_state": "",
                "order_fy": 2013,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 6716.25,
                "bookings_local": 6716.25,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 6716.25,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "ramesh b l",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows agent for microsoft sql server - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s17cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramesh.lakshman@wipro.com",
                "res_email": "hmoshinkhan@gmail.com",
                "bookings_usd": 6716.25,
                "maint_start_dt": "2013-01-16t00:00:00.000z",
                "order_dt": "2012-12-28t00:00:00.000z",
                "product_feature": "windows agent for microsoft sql server",
                "acv_mr_local": 6716.25,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 45,
                "maint_end_dt": "2014-01-15t00:00:00.000z",
                "order_no": "ol1657893",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "ramesh",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 6716.25,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 199,
                "eu_state": "",
                "order_fy": 2013,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 232.5,
                "bookings_local": 232.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited (infotech group enterprise)",
                "acv_lic_local": 0,
                "acv_mr_usd": 232.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "mr. pavan kumar",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s00cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "pavankumar.kompalli@wipro.com",
                "res_email": "sushavan.sarkar@wipro.com",
                "bookings_usd": 232.5,
                "maint_start_dt": "2014-01-16t00:00:00.000z",
                "order_dt": "2013-12-31t00:00:00.000z",
                "product_feature": "arcserve backup for windows",
                "acv_mr_local": 232.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 2,
                "maint_end_dt": "2015-01-15t00:00:00.000z",
                "order_no": "ol1725784",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr.",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 232.5,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "pavan",
                "list_price": 155,
                "eu_state": "",
                "order_fy": 2014,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 298.5,
                "bookings_local": 298.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited (infotech group enterprise)",
                "acv_lic_local": 0,
                "acv_mr_usd": 298.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "mr. pavan kumar",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows tape library option - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s01cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "pavankumar.kompalli@wipro.com",
                "res_email": "sushavan.sarkar@wipro.com",
                "bookings_usd": 298.5,
                "maint_start_dt": "2014-01-16t00:00:00.000z",
                "order_dt": "2013-12-31t00:00:00.000z",
                "product_feature": "windows tape library option",
                "acv_mr_local": 298.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 2,
                "maint_end_dt": "2015-01-15t00:00:00.000z",
                "order_no": "ol1725784",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr.",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 298.5,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "pavan",
                "list_price": 199,
                "eu_state": "",
                "order_fy": 2014,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 5604.75,
                "bookings_local": 5604.75,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited (infotech group enterprise)",
                "acv_lic_local": 0,
                "acv_mr_usd": 5604.75,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "mr. pavan kumar",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup agent for open files on windows - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s09cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "pavankumar.kompalli@wipro.com",
                "res_email": "sushavan.sarkar@wipro.com",
                "bookings_usd": 5604.75,
                "maint_start_dt": "2014-01-16t00:00:00.000z",
                "order_dt": "2013-12-31t00:00:00.000z",
                "product_feature": "agent for open files on windows",
                "acv_mr_local": 5604.75,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 47,
                "maint_end_dt": "2015-01-15t00:00:00.000z",
                "order_no": "ol1725784",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr.",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 5604.75,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "pavan",
                "list_price": 159,
                "eu_state": "",
                "order_fy": 2014,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 6716.25,
                "bookings_local": 6716.25,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited (infotech group enterprise)",
                "acv_lic_local": 0,
                "acv_mr_usd": 6716.25,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "mr. pavan kumar",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows agent for microsoft sql server - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s17cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "pavankumar.kompalli@wipro.com",
                "res_email": "sushavan.sarkar@wipro.com",
                "bookings_usd": 6716.25,
                "maint_start_dt": "2014-01-16t00:00:00.000z",
                "order_dt": "2013-12-31t00:00:00.000z",
                "product_feature": "windows agent for microsoft sql server",
                "acv_mr_local": 6716.25,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 45,
                "maint_end_dt": "2015-01-15t00:00:00.000z",
                "order_no": "ol1725784",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr.",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 6716.25,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "pavan",
                "list_price": 199,
                "eu_state": "",
                "order_fy": 2014,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 592.5,
                "bookings_local": 592.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited (infotech group enterprise)",
                "acv_lic_local": 0,
                "acv_mr_usd": 592.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "mr. pavan kumar",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup client agent for unix - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s19cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "pavankumar.kompalli@wipro.com",
                "res_email": "sushavan.sarkar@wipro.com",
                "bookings_usd": 592.5,
                "maint_start_dt": "2014-01-16t00:00:00.000z",
                "order_dt": "2013-12-31t00:00:00.000z",
                "product_feature": "client agent for unix",
                "acv_mr_local": 592.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 10,
                "maint_end_dt": "2015-01-15t00:00:00.000z",
                "order_no": "ol1725784",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr.",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 592.5,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "pavan",
                "list_price": 79,
                "eu_state": "",
                "order_fy": 2014,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 1492.5,
                "bookings_local": 1492.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 1492.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "sriram.c",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows agent for microsoft sql server - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s17cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramasubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 1492.5,
                "maint_start_dt": "2010-12-30t00:00:00.000z",
                "order_dt": "2010-12-30t00:00:00.000z",
                "product_feature": "windows agent for microsoft sql server",
                "acv_mr_local": 1492.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 10,
                "maint_end_dt": "2011-12-29t00:00:00.000z",
                "order_no": "ol1490632",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited",
                "license_no": "pacc783439",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sriram.c",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 1492.5,
                "res_zip": "560027",
                "eu_zip": "560100",
                "sku_type": "maintenance renewal",
                "last_name": "",
                "list_price": 199,
                "eu_state": "null",
                "order_fy": 2011,
                "eu_city": "."
            },
            {
                "acv_usd": 592.5,
                "bookings_local": 592.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 592.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "sriram.c",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup client agent for unix - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s19cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramasubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 592.5,
                "maint_start_dt": "2010-12-30t00:00:00.000z",
                "order_dt": "2010-12-30t00:00:00.000z",
                "product_feature": "client agent for unix",
                "acv_mr_local": 592.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 10,
                "maint_end_dt": "2011-12-29t00:00:00.000z",
                "order_no": "ol1490632",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited",
                "license_no": "pacc783439",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sriram.c",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 592.5,
                "res_zip": "560027",
                "eu_zip": "560100",
                "sku_type": "maintenance renewal",
                "last_name": "",
                "list_price": 79,
                "eu_state": "null",
                "order_fy": 2011,
                "eu_city": "."
            },
            {
                "acv_usd": 2666.25,
                "bookings_local": 2666.25,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 2666.25,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "sriram.c",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup client agent for windows - maintenance renewal - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb20w22cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramasubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 2666.25,
                "maint_start_dt": "2010-12-30t00:00:00.000z",
                "order_dt": "2010-12-30t00:00:00.000z",
                "product_feature": "client agent for windows",
                "acv_mr_local": 2666.25,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 45,
                "maint_end_dt": "2011-12-29t00:00:00.000z",
                "order_no": "ol1490632",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited",
                "license_no": "pacc783439",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sriram.c",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 2666.25,
                "res_zip": "560027",
                "eu_zip": "560100",
                "sku_type": "maintenance renewal",
                "last_name": "",
                "list_price": 79,
                "eu_state": "null",
                "order_fy": 2011,
                "eu_city": "."
            },
            {
                "acv_usd": 1585.5,
                "bookings_local": 1585.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 0,
                "acv_mr_usd": 1585.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "brightstor arcserve backup  for unix agent for oracle for solaris - 1 year enterprise maintenance renewal",
                "sku": "gmrbabsb10s16cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 1585.5,
                "maint_start_dt": "2011-12-30t00:00:00.000z",
                "order_dt": "2012-01-11t00:00:00.000z",
                "product_feature": "unix agent for oracle",
                "acv_mr_local": 1585.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 5,
                "maint_end_dt": "2012-12-29t00:00:00.000z",
                "order_no": "ol1591460",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 1585.5,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 422.8,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            },
            {
                "acv_usd": 116.25,
                "bookings_local": 116.25,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 0,
                "acv_mr_usd": 116.25,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s00cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 116.25,
                "maint_start_dt": "2011-12-30t00:00:00.000z",
                "order_dt": "2012-01-11t00:00:00.000z",
                "product_feature": "arcserve backup for windows",
                "acv_mr_local": 116.25,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 1,
                "maint_end_dt": "2012-12-29t00:00:00.000z",
                "order_no": "ol1591460",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 116.25,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 155,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            },
            {
                "acv_usd": 592.5,
                "bookings_local": 592.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 592.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "ramesh b l",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup client agent for unix - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s19cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramesh.lakshman@wipro.com",
                "res_email": "hmoshinkhan@gmail.com",
                "bookings_usd": 592.5,
                "maint_start_dt": "2013-01-16t00:00:00.000z",
                "order_dt": "2012-12-28t00:00:00.000z",
                "product_feature": "client agent for unix",
                "acv_mr_local": 592.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 10,
                "maint_end_dt": "2014-01-15t00:00:00.000z",
                "order_no": "ol1657893",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "ramesh",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 592.5,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 79,
                "eu_state": "",
                "order_fy": 2013,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 5332.5,
                "bookings_local": 5332.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 5332.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "ramesh b l",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup client agent for windows - maintenance renewal - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb20w22cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramesh.lakshman@wipro.com",
                "res_email": "hmoshinkhan@gmail.com",
                "bookings_usd": 5332.5,
                "maint_start_dt": "2013-01-16t00:00:00.000z",
                "order_dt": "2012-12-28t00:00:00.000z",
                "product_feature": "client agent for windows",
                "acv_mr_local": 5332.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 90,
                "maint_end_dt": "2014-01-15t00:00:00.000z",
                "order_no": "ol1657893",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "ramesh",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 5332.5,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "b",
                "list_price": 79,
                "eu_state": "",
                "order_fy": 2013,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 934.95,
                "bookings_local": 934.95,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited (infotech group enterprise)",
                "acv_lic_local": 0,
                "acv_mr_usd": 934.95,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "mr. pavan kumar",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup client agent for linux - maintenance renewal - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb20w20cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "pavankumar.kompalli@wipro.com",
                "res_email": "sushavan.sarkar@wipro.com",
                "bookings_usd": 934.95,
                "maint_start_dt": "2013-12-28t00:00:00.000z",
                "order_dt": "2013-12-31t00:00:00.000z",
                "product_feature": "client agent for linux",
                "acv_mr_local": 934.95,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 15,
                "maint_end_dt": "2015-01-15t00:00:00.000z",
                "order_no": "ol1725784",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr.",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 934.95,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "pavan",
                "list_price": 79,
                "eu_state": "",
                "order_fy": 2014,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 5332.5,
                "bookings_local": 5332.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited (infotech group enterprise)",
                "acv_lic_local": 0,
                "acv_mr_usd": 5332.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "mr. pavan kumar",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup client agent for windows - maintenance renewal - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb20w22cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "pavankumar.kompalli@wipro.com",
                "res_email": "sushavan.sarkar@wipro.com",
                "bookings_usd": 5332.5,
                "maint_start_dt": "2013-12-28t00:00:00.000z",
                "order_dt": "2013-12-31t00:00:00.000z",
                "product_feature": "client agent for windows",
                "acv_mr_local": 5332.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 90,
                "maint_end_dt": "2015-01-15t00:00:00.000z",
                "order_no": "ol1725784",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr.",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 5332.5,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "pavan",
                "list_price": 79,
                "eu_state": "",
                "order_fy": 2014,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 1268.4,
                "bookings_local": 1268.4,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited (infotech group enterprise)",
                "acv_lic_local": 0,
                "acv_mr_usd": 1268.4,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "mr. pavan kumar",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "brightstor arcserve backup  for unix agent for oracle for solaris - 1 year enterprise maintenance renewal",
                "sku": "gmrbabsb10s16cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "pavankumar.kompalli@wipro.com",
                "res_email": "sushavan.sarkar@wipro.com",
                "bookings_usd": 1268.4,
                "maint_start_dt": "2014-01-16t00:00:00.000z",
                "order_dt": "2013-12-31t00:00:00.000z",
                "product_feature": "unix agent for oracle",
                "acv_mr_local": 1268.4,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 4,
                "maint_end_dt": "2015-01-15t00:00:00.000z",
                "order_no": "ol1725784",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr.",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 1268.4,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "pavan",
                "list_price": 422.8,
                "eu_state": "",
                "order_fy": 2014,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 116.25,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro ltd (infotech group)",
                "acv_lic_local": 0,
                "acv_mr_usd": 116.25,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "ingram micro india ltd.",
                "eu_contact": "mr sriram",
                "eu_phone": "80 30299656",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s00cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramsubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 116.25,
                "maint_start_dt": "2009-12-29t00:00:00.000z",
                "order_dt": "2009-12-30t00:00:00.000z",
                "product_feature": "arcserve backup for windows",
                "acv_mr_local": 116.25,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 1,
                "maint_end_dt": "2010-12-28t00:00:00.000z",
                "order_no": "ol1372266",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 116.25,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "sriram",
                "list_price": 155,
                "eu_state": "null",
                "order_fy": 2010,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 149.25,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro ltd (infotech group)",
                "acv_lic_local": 0,
                "acv_mr_usd": 149.25,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "ingram micro india ltd.",
                "eu_contact": "mr sriram",
                "eu_phone": "80 30299656",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows tape library option - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s01cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramsubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 149.25,
                "maint_start_dt": "2009-12-29t00:00:00.000z",
                "order_dt": "2009-12-30t00:00:00.000z",
                "product_feature": "windows tape library option",
                "acv_mr_local": 149.25,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 1,
                "maint_end_dt": "2010-12-28t00:00:00.000z",
                "order_no": "ol1372266",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 149.25,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "sriram",
                "list_price": 199,
                "eu_state": "null",
                "order_fy": 2010,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 1044.75,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro ltd (infotech group)",
                "acv_lic_local": 0,
                "acv_mr_usd": 1044.75,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "ingram micro india ltd.",
                "eu_contact": "mr sriram",
                "eu_phone": "80 30299656",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows agent for microsoft sql server - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s17cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramsubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 1044.75,
                "maint_start_dt": "2009-12-29t00:00:00.000z",
                "order_dt": "2009-12-30t00:00:00.000z",
                "product_feature": "windows agent for microsoft sql server",
                "acv_mr_local": 1044.75,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 7,
                "maint_end_dt": "2010-12-28t00:00:00.000z",
                "order_no": "ol1372266",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 1044.75,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "sriram",
                "list_price": 199,
                "eu_state": "null",
                "order_fy": 2010,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 296.25,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro ltd (infotech group)",
                "acv_lic_local": 0,
                "acv_mr_usd": 296.25,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "ingram micro india ltd.",
                "eu_contact": "mr sriram",
                "eu_phone": "80 30299656",
                "trans_region": "ap",
                "product_description": "ca arcserve backup client agent for unix - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s19cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramsubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 296.25,
                "maint_start_dt": "2009-12-29t00:00:00.000z",
                "order_dt": "2009-12-30t00:00:00.000z",
                "product_feature": "client agent for unix",
                "acv_mr_local": 296.25,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 5,
                "maint_end_dt": "2010-12-28t00:00:00.000z",
                "order_no": "ol1372266",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 296.25,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "sriram",
                "list_price": 79,
                "eu_state": "null",
                "order_fy": 2010,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 1777.5,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro ltd (infotech group)",
                "acv_lic_local": 0,
                "acv_mr_usd": 1777.5,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "ingram micro india ltd.",
                "eu_contact": "mr sriram",
                "eu_phone": "80 30299656",
                "trans_region": "ap",
                "product_description": "ca arcserve backup client agent for windows - maintenance renewal - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb20w22cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramsubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 1777.5,
                "maint_start_dt": "2009-12-29t00:00:00.000z",
                "order_dt": "2009-12-30t00:00:00.000z",
                "product_feature": "client agent for windows",
                "acv_mr_local": 1777.5,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 30,
                "maint_end_dt": "2010-12-28t00:00:00.000z",
                "order_no": "ol1372266",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 1777.5,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "maintenance renewal",
                "last_name": "sriram",
                "list_price": 79,
                "eu_state": "null",
                "order_fy": 2010,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 149.25,
                "bookings_local": 149.25,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 149.25,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "sriram.c",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup for windows tape library option - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s01cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramasubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 149.25,
                "maint_start_dt": "2010-12-30t00:00:00.000z",
                "order_dt": "2010-12-30t00:00:00.000z",
                "product_feature": "windows tape library option",
                "acv_mr_local": 149.25,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 1,
                "maint_end_dt": "2011-12-29t00:00:00.000z",
                "order_no": "ol1490632",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited",
                "license_no": "pacc783439",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sriram.c",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 149.25,
                "res_zip": "560027",
                "eu_zip": "560100",
                "sku_type": "maintenance renewal",
                "last_name": "",
                "list_price": 199,
                "eu_state": "null",
                "order_fy": 2011,
                "eu_city": "."
            },
            {
                "acv_usd": 5366.25,
                "bookings_local": 5366.25,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 5366.25,
                "migration_by_month": "renewal",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "sriram.c",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup agent for open files on windows - 1 year enterprise maintenance renewal",
                "sku": "gmrbabwb10s09cg",
                "disti_country": "india",
                "lic_type": "maintenance",
                "eu_email": "ramasubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 5366.25,
                "maint_start_dt": "2010-12-30t00:00:00.000z",
                "order_dt": "2010-12-30t00:00:00.000z",
                "product_feature": "agent for open files on windows",
                "acv_mr_local": 5366.25,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 45,
                "maint_end_dt": "2011-12-29t00:00:00.000z",
                "order_no": "ol1490632",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited",
                "license_no": "pacc783439",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sriram.c",
                "eu_country": "india",
                "product_version": "1",
                "acv_local": 5366.25,
                "res_zip": "560027",
                "eu_zip": "560100",
                "sku_type": "maintenance renewal",
                "last_name": "",
                "list_price": 159,
                "eu_state": "null",
                "order_fy": 2011,
                "eu_city": "."
            },
            {
                "acv_usd": 450.12,
                "bookings_local": 450.12,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 333.5506,
                "acv_mr_usd": 116.5694,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r16 for windows - product plus 1 year enterprise maintenance",
                "sku": "babwbr1600w00c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 450.12,
                "maint_start_dt": "2012-01-16t00:00:00.000z",
                "order_dt": "2012-01-16t00:00:00.000z",
                "product_feature": "arcserve backup for windows",
                "acv_mr_local": 116.5694,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 333.5506,
                "qty": 1,
                "maint_end_dt": "2013-01-15t00:00:00.000z",
                "order_no": "ol1591458",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867816",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "16",
                "acv_local": 450.12,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "b",
                "list_price": 818.4,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            },
            {
                "acv_usd": 3441.3,
                "bookings_local": 3441.3,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 2550.1084,
                "acv_mr_usd": 891.1916,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "ramesh b l",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r16 client agent for linux - product plus 1 year enterprise maintenance",
                "sku": "babwbr1600w20c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramesh.lakshman@wipro.com",
                "res_email": "hmoshinkhan@gmail.com",
                "bookings_usd": 3441.3,
                "maint_start_dt": "2012-12-28t00:00:00.000z",
                "order_dt": "2012-12-28t00:00:00.000z",
                "product_feature": "client agent for linux",
                "acv_mr_local": 891.1916,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 2550.1084,
                "qty": 15,
                "maint_end_dt": "2013-12-27t00:00:00.000z",
                "order_no": "ol1657891",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "ramesh",
                "eu_country": "india",
                "product_version": "16",
                "acv_local": 3441.3,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "b",
                "list_price": 417.12,
                "eu_state": "",
                "order_fy": 2013,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 5735.5,
                "bookings_local": 5735.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 4250.1806,
                "acv_mr_usd": 1485.3194,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "ramesh b l",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r16 client agent for windows - product plus 1 year enterprise maintenance",
                "sku": "babwbr1600w22c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramesh.lakshman@wipro.com",
                "res_email": "hmoshinkhan@gmail.com",
                "bookings_usd": 5735.5,
                "maint_start_dt": "2012-12-28t00:00:00.000z",
                "order_dt": "2012-12-28t00:00:00.000z",
                "product_feature": "client agent for windows",
                "acv_mr_local": 1485.3194,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 4250.1806,
                "qty": 25,
                "maint_end_dt": "2013-12-27t00:00:00.000z",
                "order_no": "ol1657891",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "ramesh",
                "eu_country": "india",
                "product_version": "16",
                "acv_local": 5735.5,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "b",
                "list_price": 417.12,
                "eu_state": "",
                "order_fy": 2013,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 402.6,
                "bookings_local": 402.6,
                "product_solutions1": "udp std",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "udp",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 402.6,
                "migration_by_month": "migration",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "ramesh b l",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve d2d r16 for windows server standard edition - product plus 1 year enterprise maintenance",
                "sku": "cad2dbr160w04c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramesh.lakshman@wipro.com",
                "res_email": "hmoshinkhan@gmail.com",
                "bookings_usd": 402.6,
                "maint_start_dt": "2012-12-28t00:00:00.000z",
                "order_dt": "2012-12-28t00:00:00.000z",
                "product_feature": "windows server standard edition",
                "acv_mr_local": 402.6,
                "eu_geo": "ap",
                "primary_pricing_option": "udp std",
                "acv_lic_usd": 0,
                "qty": 1,
                "maint_end_dt": "2013-12-27t00:00:00.000z",
                "order_no": "ol1657891",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "ramesh",
                "eu_country": "india",
                "product_version": "16",
                "acv_local": 402.6,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "b",
                "list_price": 732,
                "eu_state": "",
                "order_fy": 2013,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 507.54,
                "bookings_local": 507.54,
                "product_solutions1": "udp adv",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "udp",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 507.54,
                "migration_by_month": "migration",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "ramesh b l",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve d2d r16 for windows server advanced edition - product plus 1 year enterprise maintenance",
                "sku": "cad2dbr160w05c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramesh.lakshman@wipro.com",
                "res_email": "hmoshinkhan@gmail.com",
                "bookings_usd": 507.54,
                "maint_start_dt": "2012-12-28t00:00:00.000z",
                "order_dt": "2012-12-28t00:00:00.000z",
                "product_feature": "windows server advanced edition",
                "acv_mr_local": 507.54,
                "eu_geo": "ap",
                "primary_pricing_option": "udp adv",
                "acv_lic_usd": 0,
                "qty": 1,
                "maint_end_dt": "2013-12-27t00:00:00.000z",
                "order_no": "ol1657891",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "ramesh",
                "eu_country": "india",
                "product_version": "16",
                "acv_local": 507.54,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "b",
                "list_price": 922.8,
                "eu_state": "",
                "order_fy": 2013,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 1852.76,
                "bookings_local": 1852.76,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited (infotech group enterprise)",
                "acv_lic_local": 1372.9454,
                "acv_mr_usd": 479.8146,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "mr. pavan kumar",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r16.5 for windows storage area network (san) option - product plus 1 year enterprise maintenance",
                "sku": "babwbr1650w03c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "pavankumar.kompalli@wipro.com",
                "res_email": "sushavan.sarkar@wipro.com",
                "bookings_usd": 1852.76,
                "maint_start_dt": "2014-01-01t00:00:00.000z",
                "order_dt": "2013-12-30t00:00:00.000z",
                "product_feature": "windows storage area network option",
                "acv_mr_local": 479.8146,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 1372.9454,
                "qty": 2,
                "maint_end_dt": "2014-12-31t00:00:00.000z",
                "order_no": "ol1725780",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr.",
                "eu_country": "india",
                "product_version": "16.5",
                "acv_local": 1852.76,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "pavan",
                "list_price": 1684.32,
                "eu_state": "",
                "order_fy": 2014,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 3467.3999,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro ltd (infotech group)",
                "acv_lic_local": 0,
                "acv_mr_usd": 3467.3999,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "ingram micro india ltd.",
                "eu_contact": "mr sriram",
                "eu_phone": "80 30299656",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r12.5 for windows agent for oracle - product plus 1 year enterprise maintenance",
                "sku": "babwbr1250w16c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramsubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 3467.4,
                "maint_start_dt": "2009-12-29t00:00:00.000z",
                "order_dt": "2009-12-30t00:00:00.000z",
                "product_feature": "windows agent for oracle",
                "acv_mr_local": 3467.3999,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 6,
                "maint_end_dt": "2010-12-28t00:00:00.000z",
                "order_no": "ol1372261",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "12.5",
                "acv_local": 3467.3999,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "sriram",
                "list_price": 0,
                "eu_state": "null",
                "order_fy": 2010,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 1147.1,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro ltd (infotech group)",
                "acv_lic_local": 850.0361,
                "acv_mr_usd": 297.0639,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "ingram micro india ltd.",
                "eu_contact": "mr sriram",
                "eu_phone": "80 30299656",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r12.5 client agent for unix - product plus 1 year enterprise maintenance",
                "sku": "babwbr1250w19c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramsubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 1147.1,
                "maint_start_dt": "2009-12-29t00:00:00.000z",
                "order_dt": "2009-12-30t00:00:00.000z",
                "product_feature": "client agent for unix",
                "acv_mr_local": 297.0639,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 850.0361,
                "qty": 5,
                "maint_end_dt": "2010-12-28t00:00:00.000z",
                "order_no": "ol1372261",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "12.5",
                "acv_local": 1147.1,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "sriram",
                "list_price": 0,
                "eu_state": "null",
                "order_fy": 2010,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 4586.5,
                "bookings_local": 4586.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 3155.6799,
                "acv_mr_usd": 1430.8201,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "sriram.c",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r11.5 for unix agent for oracle for solaris upgrade from brightstor enterprise backup v10.5 or brightstor arcserve backup r11.1 - product plus 1 year enterprise maintenance",
                "sku": "babora106115uc4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramasubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 4586.5,
                "maint_start_dt": "2010-12-30t00:00:00.000z",
                "order_dt": "2010-12-30t00:00:00.000z",
                "product_feature": "unix agent for oracle (solaris)",
                "acv_mr_local": 1430.8201,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 3155.6799,
                "qty": 5,
                "maint_end_dt": "2011-12-29t00:00:00.000z",
                "order_no": "ol1490632",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited",
                "license_no": "pacc783439",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sriram.c",
                "eu_country": "india",
                "product_version": "11.5",
                "acv_local": 4586.5,
                "res_zip": "560027",
                "eu_zip": "560100",
                "sku_type": "version upgrade",
                "last_name": "",
                "list_price": 1667.82,
                "eu_state": "null",
                "order_fy": 2011,
                "eu_city": "."
            },
            {
                "acv_usd": 17337,
                "bookings_local": 17337,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 12847.1992,
                "acv_mr_usd": 4489.8008,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "sriram.c",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r15 for windows agent for microsoft sql server - product plus 1 year enterprise maintenance",
                "sku": "babwbr1500w17c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramasubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 17337,
                "maint_start_dt": "2010-12-30t00:00:00.000z",
                "order_dt": "2010-12-30t00:00:00.000z",
                "product_feature": "windows agent for microsoft sql server",
                "acv_mr_local": 4489.8008,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 12847.1992,
                "qty": 30,
                "maint_end_dt": "2011-12-29t00:00:00.000z",
                "order_no": "ol1490632",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited",
                "license_no": "pacc783439",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sriram.c",
                "eu_country": "india",
                "product_version": "15",
                "acv_local": 17337,
                "res_zip": "560027",
                "eu_zip": "560100",
                "sku_type": "full/boxed",
                "last_name": "",
                "list_price": 1050.72,
                "eu_state": "null",
                "order_fy": 2011,
                "eu_city": "."
            },
            {
                "acv_usd": 5735.5,
                "bookings_local": 5735.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 4250.1806,
                "acv_mr_usd": 1485.3194,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "sriram.c",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r15 client agent for windows - product plus 1 year enterprise maintenance",
                "sku": "babwbr1500w22c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramasubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 5735.5,
                "maint_start_dt": "2010-12-30t00:00:00.000z",
                "order_dt": "2010-12-30t00:00:00.000z",
                "product_feature": "client agent for windows",
                "acv_mr_local": 1485.3194,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 4250.1806,
                "qty": 25,
                "maint_end_dt": "2011-12-29t00:00:00.000z",
                "order_no": "ol1490632",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited",
                "license_no": "pacc783439",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sriram.c",
                "eu_country": "india",
                "product_version": "15",
                "acv_local": 5735.5,
                "res_zip": "560027",
                "eu_zip": "560100",
                "sku_type": "full/boxed",
                "last_name": "",
                "list_price": 417.12,
                "eu_state": "null",
                "order_fy": 2011,
                "eu_city": "."
            },
            {
                "acv_usd": 577.9,
                "bookings_local": 577.9,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 428.24,
                "acv_mr_usd": 149.66,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r16 for windows tape library option - product plus 1 year enterprise maintenance",
                "sku": "babwbr1600w01c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 577.9,
                "maint_start_dt": "2012-01-16t00:00:00.000z",
                "order_dt": "2012-01-16t00:00:00.000z",
                "product_feature": "windows tape library option",
                "acv_mr_local": 149.66,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 428.24,
                "qty": 1,
                "maint_end_dt": "2013-01-15t00:00:00.000z",
                "order_no": "ol1591458",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867816",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "16",
                "acv_local": 577.9,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "b",
                "list_price": 1050.72,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            },
            {
                "acv_usd": 2455.6201,
                "bookings_local": 2455.62,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 1883.2921,
                "acv_mr_usd": 572.328,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "brightstor arcserve backup r11.5 for unix agent for oracle for solaris - product plus 1 year enterprise maintenance",
                "sku": "babora10600115pc4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 2455.62,
                "maint_start_dt": "2012-01-16t00:00:00.000z",
                "order_dt": "2012-01-16t00:00:00.000z",
                "product_feature": "unix agent for oracle (solaris)",
                "acv_mr_local": 572.328,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 1883.2921,
                "qty": 2,
                "maint_end_dt": "2013-01-15t00:00:00.000z",
                "order_no": "ol1591458",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867816",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "11.5",
                "acv_local": 2455.6201,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "b",
                "list_price": 2232.38,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            },
            {
                "acv_usd": 3705.52,
                "bookings_local": 3705.52,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited (infotech group enterprise)",
                "acv_lic_local": 2870.6326,
                "acv_mr_usd": 834.8874,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "mr. pavan kumar",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r16.5 for windows san secondary server bundle - product plus 1 year enterprise maintenance",
                "sku": "babwbr1650w34c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "pavankumar.kompalli@wipro.com",
                "res_email": "sushavan.sarkar@wipro.com",
                "bookings_usd": 3705.52,
                "maint_start_dt": "2014-01-01t00:00:00.000z",
                "order_dt": "2013-12-30t00:00:00.000z",
                "product_feature": "windows san secondary server bundle",
                "acv_mr_local": 834.8874,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 2870.6326,
                "qty": 4,
                "maint_end_dt": "2014-12-31t00:00:00.000z",
                "order_no": "ol1725780",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr.",
                "eu_country": "india",
                "product_version": "16.5",
                "acv_local": 3705.52,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "pavan",
                "list_price": 1684.32,
                "eu_state": "",
                "order_fy": 2014,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 3705.52,
                "bookings_local": 3705.52,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited (infotech group enterprise)",
                "acv_lic_local": 2745.8909,
                "acv_mr_usd": 959.6291,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "mr. pavan kumar",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r16.5 for linux san secondary server bundle - product plus 1 year enterprise maintenance",
                "sku": "babwbr1650w66c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "pavankumar.kompalli@wipro.com",
                "res_email": "sushavan.sarkar@wipro.com",
                "bookings_usd": 3705.52,
                "maint_start_dt": "2014-01-01t00:00:00.000z",
                "order_dt": "2013-12-30t00:00:00.000z",
                "product_feature": "linux san secondary server bundle",
                "acv_mr_local": 959.6291,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 2745.8909,
                "qty": 4,
                "maint_end_dt": "2014-12-31t00:00:00.000z",
                "order_no": "ol1725780",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr.",
                "eu_country": "india",
                "product_version": "16.5",
                "acv_local": 3705.52,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "pavan",
                "list_price": 1684.32,
                "eu_state": "",
                "order_fy": 2014,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 9002.4004,
                "bookings_local": 9002.4,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited (infotech group enterprise)",
                "acv_lic_local": 6671.013,
                "acv_mr_usd": 2331.3874,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "redington (india) ltd",
                "eu_contact": "mr. pavan kumar",
                "eu_phone": "              ",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r16.5 for windows vm agent per host license - product plus 1 year enterprise maintenance",
                "sku": "babwbr1650w80c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "pavankumar.kompalli@wipro.com",
                "res_email": "sushavan.sarkar@wipro.com",
                "bookings_usd": 9002.4,
                "maint_start_dt": "2014-01-01t00:00:00.000z",
                "order_dt": "2013-12-30t00:00:00.000z",
                "product_feature": "windows vm agent per host license",
                "acv_mr_local": 2331.3874,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 6671.013,
                "qty": 10,
                "maint_end_dt": "2014-12-31t00:00:00.000z",
                "order_no": "ol1725780",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867818",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr.",
                "eu_country": "india",
                "product_version": "16.5",
                "acv_local": 9002.4004,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "pavan",
                "list_price": 1636.8,
                "eu_state": "",
                "order_fy": 2014,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 0,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro limited",
                "acv_lic_local": 0,
                "acv_mr_usd": 0,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "tech pacific india ltd.",
                "eu_contact": "mr chandrasekaran",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r12 for windows tape library option - product plus 1 year enterprise maintenance",
                "sku": "babwbr1200w01c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "chandra.sekarana@wipro.com",
                "res_email": "ramasubramanian.sriram@wirpo.com",
                "bookings_usd": 577.9,
                "maint_start_dt": "2008-12-30t00:00:00.000z",
                "order_dt": "2008-12-30t00:00:00.000z",
                "product_feature": "windows tape library option",
                "acv_mr_local": 0,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 0,
                "qty": 1,
                "maint_end_dt": "2009-12-01t00:00:00.000z",
                "order_no": "ol1242833",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "12.0",
                "acv_local": 0,
                "res_zip": "605102",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "chandrasekaran",
                "list_price": 0,
                "eu_state": "null",
                "order_fy": 2009,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 1155.8,
                "bookings_local": 0,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 12,
                "product_solutions2": "bu",
                "res_name": "wipro ltd (infotech group)",
                "acv_lic_local": 856.48,
                "acv_mr_usd": 299.3201,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "ingram micro india ltd.",
                "eu_contact": "mr sriram",
                "eu_phone": "80 30299656",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r12.5 for windows ndmp nas option - product plus 1 year enterprise maintenance",
                "sku": "babwbr1250w07c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "ramsubramanian.sriram@wipro.com",
                "res_email": "ramasubramanian.sriram@wipro.com",
                "bookings_usd": 1155.8,
                "maint_start_dt": "2009-12-29t00:00:00.000z",
                "order_dt": "2009-12-30t00:00:00.000z",
                "product_feature": "windows ndmp nas option",
                "acv_mr_local": 299.3201,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 856.48,
                "qty": 2,
                "maint_end_dt": "2010-12-28t00:00:00.000z",
                "order_no": "ol1372261",
                "res_country": "india",
                "order_fq": 3,
                "eu_name": "wipro limited (infotech division)",
                "license_no": "pacc684404",
                "contract_number": "",
                "currency": "usd",
                "first_name": "mr",
                "eu_country": "india",
                "product_version": "12.5",
                "acv_local": 1155.8001,
                "res_zip": "560100",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "sriram",
                "list_price": 0,
                "eu_state": "null",
                "order_fy": 2010,
                "eu_city": "mysore/karnatak"
            },
            {
                "acv_usd": 923.48,
                "bookings_local": 923.48,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 684.3248,
                "acv_mr_usd": 239.1552,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r16 agent for open files on windows - product plus 1 year enterprise maintenance",
                "sku": "babwbr1600w09c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 923.48,
                "maint_start_dt": "2012-01-16t00:00:00.000z",
                "order_dt": "2012-01-16t00:00:00.000z",
                "product_feature": "agent for open files on windows",
                "acv_mr_local": 239.1552,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 684.3248,
                "qty": 2,
                "maint_end_dt": "2013-01-15t00:00:00.000z",
                "order_no": "ol1591458",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867816",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "16",
                "acv_local": 923.48,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "b",
                "list_price": 839.52,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            },
            {
                "acv_usd": 2889.5,
                "bookings_local": 2889.5,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 2141.1999,
                "acv_mr_usd": 748.3001,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r16 for windows agent for microsoft sql server - product plus 1 year enterprise maintenance",
                "sku": "babwbr1600w17c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 2889.5,
                "maint_start_dt": "2012-01-16t00:00:00.000z",
                "order_dt": "2012-01-16t00:00:00.000z",
                "product_feature": "windows agent for microsoft sql server",
                "acv_mr_local": 748.3001,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 2141.1999,
                "qty": 5,
                "maint_end_dt": "2013-01-15t00:00:00.000z",
                "order_no": "ol1591458",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867816",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "16",
                "acv_local": 2889.5,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "b",
                "list_price": 1050.72,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            },
            {
                "acv_usd": 3211.8799,
                "bookings_local": 3211.88,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 2380.101,
                "acv_mr_usd": 831.7788,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r16 client agent for unix - product plus 1 year enterprise maintenance",
                "sku": "babwbr1600w19c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 3211.88,
                "maint_start_dt": "2012-01-16t00:00:00.000z",
                "order_dt": "2012-01-16t00:00:00.000z",
                "product_feature": "client agent for unix",
                "acv_mr_local": 831.7788,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 2380.101,
                "qty": 14,
                "maint_end_dt": "2013-01-15t00:00:00.000z",
                "order_no": "ol1591458",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867816",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "16",
                "acv_local": 3211.8798,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "b",
                "list_price": 417.12,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            },
            {
                "acv_usd": 4588.3999,
                "bookings_local": 4588.4,
                "product_solutions1": "bu",
                "revenue_type": "licensing",
                "order_month": 1,
                "product_solutions2": "bu",
                "res_name": "wipro infotech dm",
                "acv_lic_local": 3400.1444,
                "acv_mr_usd": 1188.2555,
                "migration_by_month": "upsell",
                "product_class": "per machine/per server",
                "disti_name": "compuage infocom limited",
                "eu_contact": "sumeet b pathak",
                "eu_phone": "",
                "trans_region": "ap",
                "product_description": "ca arcserve backup r16 client agent for windows - product plus 1 year enterprise maintenance",
                "sku": "babwbr1600w22c4",
                "disti_country": "india",
                "lic_type": "ncv",
                "eu_email": "sumeet.pathak@wipro.com",
                "res_email": "mandar.manohar@wipro.com",
                "bookings_usd": 4588.4,
                "maint_start_dt": "2012-01-16t00:00:00.000z",
                "order_dt": "2012-01-16t00:00:00.000z",
                "product_feature": "client agent for windows",
                "acv_mr_local": 1188.2555,
                "eu_geo": "ap",
                "primary_pricing_option": "bu",
                "acv_lic_usd": 3400.1444,
                "qty": 20,
                "maint_end_dt": "2013-01-15t00:00:00.000z",
                "order_no": "ol1591458",
                "res_country": "india",
                "order_fq": 4,
                "eu_name": "wipro infotech ltd",
                "license_no": "pacc867816",
                "contract_number": "",
                "currency": "usd",
                "first_name": "sumeet",
                "eu_country": "india",
                "product_version": "16",
                "acv_local": 4588.3999,
                "res_zip": "560035",
                "eu_zip": "570016",
                "sku_type": "full/boxed",
                "last_name": "b",
                "list_price": 417.12,
                "eu_state": "null",
                "order_fy": 2012,
                "eu_city": "mysore"
            }
        ],
        "primary_name": "wipro limited (infotech division",
        "doc_id": "e-o.13948-124.46.1-in",
        "master_doc_id": "o.13948-124.46.1-in"
    },
    "logger_trans_id": 0
}
 * 
 * 
 * 
 * 
 */
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Menu, Dropdown, } from 'antd';
import { XAxis, YAxis, Tooltip, Legend, Brush, ReferenceLine, CartesianGrid } from 'recharts';
// import { Chart, Axis, Geom, Legend as bizLegend,Tooltip as biztooltip,DataSet } from 'bizcharts';
//const { DataView } = DataSet;
import { TreeTable } from 'primereact/components/treetable/TreeTable';
import { Column } from 'primereact/components/column/Column';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import * as utils from '../utils/utils';
import yes from '../assets/entitlement/yes.png';
import no from '../assets/entitlement/no.png';
import KPIChart from '../components/KPIChart';
import Funnel from '../components/Charts/Funnel'
import Bar from '../components/Charts/Bar'
import Pie from '../components/Charts/Pie'
import Radar from '../components/Charts/Radar'
import ColumnChart from '../components/Charts/Column'
import LineChart from '../components/Charts/Line'
import * as ChartDataPrpeProc from './ChartsDataPreprocessor'
import GridComp from '../components/Charts/Grid'
import { TableHeaderColumn } from 'react-bootstrap-table';
import * as InsLookupConst from '../Constants/InsightLookupConst';
//This function-Based on type generates respective uicomponent

export function getUiComp(data) {
    //console.log("in getuicomp"+JSON.stringify(data));
    if (data && data.hasOwnProperty('config')) {
        //TODO: bydefault we have to take the first visual and return by construction
        //as w edonot have grid...for now lets click on respetcive visual...
        //if bar existss then show that by default..

        var visual = data.config.ui_visualization.theme;
        // console.log("Available visuals are: " + visual);
        //TODO: we need to add visual bars for showing different ui options
        if (visual.indexOf("bar") > -1) {
            visual = "bar";
        }
        return getUiCompbyTypeNData(visual, data);
    }
}

//Based on visual type,we prepare respective chart and return it
export function getUiCompbyTypeNData(type, data) {

    if (type === "grid") {

        return getGridComponent(data);
    }
    else if (type === 'bar') {
        return getBarComponent(data);
    }
    else if (type === 'column') {
        return getColumnComponent(data);
    }
    else if (type === 'pie') {
        return getPieComponent(data);
    }
    else if (type === 'radar') {
        return getRadarComponent(data);
    }
    else if (type === 'area') {
        return getAreaComponent(data);
    }
    else if (type === 'line') {
        return getLineComponent(data);
    }
    else if (type === 'nestedgrid') {
        return getNestedDataGrid(data);
    }
    else if (type === 'entitlement') {
        return getEntitlementComp(data);
    }
    else if (type === 'funnel') {
        return getFunnelComp(data);
    }
    else if (type === 'category_icon') {
        return getKPICharts(data);
    }
}





//Generates the Bar component
export function getBarComponent(data) {
    //console.log("Store info is" + JSON.stringify(store));
    var formattedData = ChartDataPrpeProc.getPreProcessData(data);
    return (
        <Bar data={formattedData['chartData']}
            measures={formattedData['measures']}
            dimensions={formattedData['dimensions']}
            measureValFormats={formattedData['measures_value_formats']}
        />
    )
    return [];

}

//Generates the Pie chart..
export function getPieComponent(data) {

    var formattedData = ChartDataPrpeProc.getPreProcessData(data);
    return (
        <Pie data={formattedData['chartData']}
            measures={formattedData['measures']}
            dimensions={formattedData['dimensions']}
            measureValFormats={formattedData['measures_value_formats']}
        />
    )
    return [];

}

//Generates the column chart..
export function getColumnComponent(data) {

    var formattedData = ChartDataPrpeProc.getPreProcessData(data);
    return (
        <ColumnChart data={formattedData['chartData']}
            measures={formattedData['measures']}
            dimensions={formattedData['dimensions']}
            measureValFormats={formattedData['measures_value_formats']}
        />
    )
    return [];

}


//Based on given data get the Radar chart and return it...
export function getRadarComponent(data) {

    var formattedData = ChartDataPrpeProc.getPreProcessData(data);
    return (
        <Radar data={formattedData['chartData']}
            measures={formattedData['measures']}
            dimensions={formattedData['dimensions']}
            measureValFormats={formattedData['measures_value_formats']}
        />
    )
    return [];

}

//Prepare funnel chart and export it
export function getFunnelComp(data) {
    var formattedData = ChartDataPrpeProc.getPreProcessData(data);
    return (
        <Funnel data={formattedData['chartData']}
            measures={formattedData['measures']}
            dimensions={formattedData['dimensions']}
            measureValFormats={formattedData['measures_value_formats']}
        />
    )
    return [];
}

//Returns the line chart..
export function getLineComponent(data) {

    var formattedData = ChartDataPrpeProc.getPreProcessData(data);
    return (
        <LineChart data={formattedData['chartData']}
            measures={formattedData['measures']}
            dimensions={formattedData['dimensions']}
            measureValFormats={formattedData['measures_value_formats']}
        />
    )
    return [];
}


//Based on given perspective get the inisghtlookup shortcuts..
export function getAreaComponent(data) {

    var compData = data['data'];
    var viewPart = compData['view'];
    if (viewPart.hasOwnProperty('measures')) {

        var measures = viewPart['measures'];
        var dimensions = viewPart['dimensions'];
        var chartData = compData['aggs_data'][dimensions[0]];

        var areaMsrs = [];
        var strokes = ["#8884d8", "#82ca9d", "#ffc658"];
        var fills = ["#8884d8", "#82ca9d", "#ffc658"];
        for (var i = 0; i < measures.length; i++) {
            var msrObj = measures[i];
            areaMsrs.push(<Area dataKey={msrObj['name']} fill={fills[i]} stackId="1" stroke={strokes[i]} />);
        }
        // console.log("uicomp"+JSON.stringify(data));

        return (
            <AreaChart width={600} height={400} data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="key" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                {areaMsrs}
            </AreaChart>
        )
    }
    return [];

}




//Returns the line chart..
export function getEntitlementComp(data) {

    var compData = data['data'];
    var viewPart = compData['view'];
    // console.log("viewpart-----" + viewPart);
    if (viewPart.hasOwnProperty('measures')) {
        var measures = viewPart['measures'];
        var dimensions = viewPart['dimensions'];
        var chartData = compData['aggs_data'][dimensions[0]];
        var formattedData = getEntitledReport(chartData, measures);

        var columnsArray = [];
        columnsArray.push({ title: utils.toTitleCase('Product'), dataIndex: 'product', key: 'product', render: text => text.toUpperCase() });
        columnsArray.push({
            title: utils.toTitleCase('Has Maintenance?'), dataIndex: 'status', key: 'status',
            render: text => <img src={text === 'yes' ? yes : no} />
        });
        return (
            <Table
                columns={columnsArray}
                dataSource={formattedData}
            />
        )
    }
    return [];
}

//HEre we get the data and configuration then we accordingly generate the kpi charts
//and returns the charts in array
export function getKPICharts(data) {

    var compData = data['data'];
    var viewPart = compData['view'];
    var fieldMappings = data['config']['ui_visualization']['field_mappings'];
    var fieldFormats = data['config']['ui_visualization']['field_formats'];
    var chartsToReturn = [];

    var chartData = compData['aggs_data'];
    for (var key in chartData) {
        var formattedLabel = getFormattedLabel(fieldMappings, key);
        var formattedVal = getFormattedValue(fieldFormats, key, chartData[key]);
        console.log("label" + formattedLabel + "valuie:" + formattedVal);
        chartsToReturn.push(<KPIChart title={formattedLabel} value={formattedVal} />);
    }
    return chartsToReturn;
}


//This gets the formatted label from field mappings that we defined in config
function getFormattedLabel(labelsSource, lookupLabel) {

    for (var lbl in labelsSource) {

        if (lbl == lookupLabel) {

            return labelsSource[lbl];

        }
    }
}

//This gets the formatted VAlue from field formats that we defined in config
function getFormattedValue(formatSource, lookupkey, value) {

    var dataType = "";
    for (var lbl in formatSource) {
        if (lbl == lookupkey) {
            dataType = formatSource[lbl]['dataType'];
            break;
        }
    }

    if (dataType == "date") {
        return convertStringToDate(value);
    }
    if (dataType == "number") {
        return Number(value).toFixed(1);
    }
}
//Based on given perspective get the inisghtlookup shortcuts..
export function getNestedDataGrid(data) {
    var compData = data['data'];
    var viewPart = compData['view'];
    if (viewPart.hasOwnProperty('measures')) {
        var measures = viewPart['measures'];
        var dimensions = viewPart['dimensions'];
        var chartData = compData['aggs_data'][dimensions[0]];
        //As our response data not directly supports nesteddatagrid,we need to format our data
        getNestedFormattedData(chartData);
        var convertedObj = updateDimsAsChildren(chartData, dimensions);
        console.log("convertedObj", JSON.stringify(convertedObj));
        var columns = [];
        columns.push(<Column field="key" header={utils.toTitleCase(dimensions[0].split("#")[dimensions[0].split("#").length - 1].replace("_", " "))} />);
        measures.forEach(msrObject => {
            columns.push(<Column field={msrObject['name']} header={utils.toTitleCase(msrObject['name'].split("#")[msrObject['name'].split("#").length - 1].replace("_", " "))} />);
        });
        //console.log("Columns" + JSON.stringify(columns));
        // console.log("Data" + JSON.stringify(chartData));
        return (
            <TreeTable value={convertedObj} header="Data">
                {columns}
            </TreeTable>
        )
    }
    return [];
}


//Generates the Grid component
export function getGridComponent(data) {
    //TODO: Here we may have to get couple of more args to identify the mode of usage
    //incase of lookups we use the uilayout config to generate the grid,else case it is different
    //we may take from first row and accordingly create columns...

    //IMportant:Check does the data have any schema references.
    //If it has then we need to read config from uilayouts..
    // if (data['config'].hasOwnProperty() && data['config'])

    //NOw get the uilayouts from local storage and based on perspective,get respective layout
    //and corresponding section and generate the columns
    var uilayouts = new Object(JSON.parse(window.localStorage.uilayouts));

    var columnsarray = getGridColumns(data, uilayouts);
    var visualDataAddress = data['config'].hasOwnProperty('ui_dataset_name') ? data['config']['ui_dataset_name'] : "";
    var visualData = data['data'][visualDataAddress];
    // console.log("lis of columns..."+columnsarray);
    return (
        <GridComp
            columns={columnsarray}
            data={visualData}
        />
    )
}

/**
 * This function checks the data and based on configs defined,it can
 *
 *  Gets the uilayout config and accordingly define the columns
 * 
 * (OR)
 * 
 * Gets the First row and base don that generates the columns...
 * 
 * //Sample uilayot json file
 * 	"enduser": {
		"uilayout": {
			"for": "insightsystem",
			"perspective": "enduser",
			
			"general_info_layout": {
				
				
			},
			"context": {
				"depends": "questions.xml",
				"es_analyse_fields": "false",
				"id": "360_DEGREE_VIEW",
				"name": "360 degree View",
				"ui": [
					{
						"dataName": "Timeline Events",
						"id": "TimeLineEvents",
						"tabName": "Timeline Events",
						"type": "dashboard",
						"visible": "false",
						
					},
					{
						"categoryAttributes": "Order FY,Product",
						"chartsAttributes": "",
						"dataName": "Orders",
						"enableExport": "true",
						"id": "orders",
						"noDataMsg": "",
						"pivotPreConfig": "true",
						"seriesAttributes": "Measures",
						"tabName": "Orders - Pivot,Orders",
						"table": "insight_sys.v_ci_eu_ordertab",
						"type": "pivot,grid",
						"used_for_analytics": "yes",
						"fields": {
							"field": [
								{
									"description": "License number",
									"filterComboBoxBuildFromGrid": "true",
									"filterControl": "MultiSelectComboBoxEx",
									"filterOperation": "Contains",
									"name": "Certificate #",
									"uiFieldId": "license_no",
									"upperCase": "true",
									"visible": "false"
								},
								{
									"filterComboBoxBuildFromGrid": "true",
									"filterControl": "MultiSelectComboBoxEx",
									"filterOperation": "Contains",
									"name": "Region (Orders)",
									"uiFieldId": "trans_region",
									"upperCase": "true",
									"visible": "false"
								}
							]
						}
					}
					}
				]
			
	},
 * 
 */
export function getGridColumns(data, layoutConfigs) {
    //TODO: Here we may have to get couple of more args to identify the mode of usage
    //incase of lookups we use the uilayout config to generate the grid,else case it is different
    //we may take from first row and accordingly create columns...

    //IMportant:Check does the data have any schema references.If it has then we need to read config from uilayouts..
    if (data[InsLookupConst.CONFIG].hasOwnProperty(InsLookupConst.UIVIS) &&
        data[InsLookupConst.CONFIG][InsLookupConst.UIVIS].hasOwnProperty(InsLookupConst.UI_SCHEMA_REF)) {
        //As we have schema reference.now we need get its lokup section(using which we read that section example: ORDERS)
        // and then read configuration base don perespetcive
        var lookupSchemaPersp = data[InsLookupConst.CONFIG][InsLookupConst.UIVIS][InsLookupConst.UI_SCHEMA_PERSPECTIVE];
        var lookupSchemaSection = data[InsLookupConst.CONFIG][InsLookupConst.UIVIS][InsLookupConst.UI_SCHEMA_REF];
        //NOw get the uilayout schema filies...
        //layoutConfigs is object like {'enduser':layout,'reseller':layout} 
        var layoutObject = null;
        for (var perspKey in layoutConfigs) {
            if (perspKey == lookupSchemaPersp) {
                //get respective uilayout...
                layoutObject = layoutConfigs[lookupSchemaPersp];
                break;
            }
        }
        //NOw generate the columns
        if (layoutObject) {
            //from this layout,get corresponding section ie..lookupSchemaSection
            var lookupConfigSection = [];
            var layoutSections = layoutObject['uilayout']['context']['ui'];
            layoutSections.forEach(section => {
                if (section['id'] == lookupSchemaSection) {
                    lookupConfigSection = section['fields']['field'];
                }
            });
            console.log("config fields" + JSON.stringify(lookupConfigSection));
            return getLayoutConfigColumns(lookupConfigSection)
        }
    }
    else {//For this we need to generate based on the data first row..
        // console.log("uicomp"+JSON.stringify(data));
        var visualDataAddress = data['config'].hasOwnProperty('ui_dataset_name') ? data['config']['ui_dataset_name'] : "";
        var visualData = data['data'][visualDataAddress];
        var columnsarray = getNonLayoutGridColumns(visualData);
        return columnsarray;
    }



}

//For the given josn object contains columns info generates the columns and return
/**
 * Sample fileds:
 * "field": [
            {
                "description": "License number",
                "filterComboBoxBuildFromGrid": "true",
                "filterControl": "MultiSelectComboBoxEx",
                "filterOperation": "Contains",
                "name": "Certificate #",
                "uiFieldId": "license_no",
                "upperCase": "true",
                "visible": "false"
            },
            {
                "filterComboBoxBuildFromGrid": "true",
                "filterControl": "MultiSelectComboBoxEx",
                "filterOperation": "Contains",
                "name": "Region (Orders)",
                "uiFieldId": "trans_region",
                "upperCase": "true",
                "visible": "false"
            }
        ]

        //sample columns to generate:
        <TableHeaderColumn dataField='id' isKey>Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Job Name</TableHeaderColumn>
          <TableHeaderColumn dataField='active' dataFormat={ activeFormatter }>Active</TableHeaderColumn>
 */
export function getLayoutConfigColumns(fields) {

    //loop each filed and accordingly generate teh columns
    var columns = [];
    var count = 0;
    //samples:
    // <TableHeaderColumn ref='satisfaction' dataField='satisfaction' filter={ { type: 'NumberFilter', options: satisfaction } }>Buyer Satisfaction</TableHeaderColumn>
    // <TableHeaderColumn ref='inStockDate' dataField='inStockDate' filter={ { type: 'DateFilter' } } dataFormat={ dateFormatter }>In Stock From</TableHeaderColumn>
    fields.forEach(field => {

        var columnProps = getColumnProperties(field);
        columns.push(
            <TableHeaderColumn dataField={field['uiFieldId']} key={count} {...columnProps}
                isKey={count == 0 ? true : false} > {field['name']}
            </TableHeaderColumn>
        );
        count++;
    });
    return columns;
}


/**
 *  This method prepares an object with all the required info for column 
 *
 */
export function getColumnProperties(node) {

    var columnInfo = {};

    //Lets add the formattings and filters..
    if (node.hasOwnProperty("dataType") && node.dataType == "date") {
        columnInfo['filter'] = { type: 'DateFilter' };
        columnInfo['dataFormat'] = dateFormatter;
    }
    else if (node.hasOwnProperty("dataType") && node.dataType == "currency") {
        columnInfo['filter'] = { type: 'TextFilter' };
        var currencySymbol = getcurrencySymbolbyCurrencyType(node.currencyType);
        columnInfo['dataFormat'] = currencyFormatter;
    }
    else if (node.hasOwnProperty("dataType") && node.dataType == "int") {
        columnInfo['filter'] = { type: 'NumberFilter', delay: 1000, };
        columnInfo['dataFormat'] = numberFormatter;
    }
    else {
        columnInfo['filter'] = { type: 'TextFilter' };
    }

    //add hide or show
    if (node.hasOwnProperty('visible') && node.visible == "false") {
        columnInfo['hidden'] = true;
    }

    return columnInfo;

}

//return grid columns....
export function getNonLayoutGridColumns(data) {
    //Here we are trying to take first object and based on that construct columns
    if (data) {
        var infoObj = data[0];
        var keys = Object.keys(infoObj);
        var opColumnArray = [];
        for (var i = 0; i < keys.length; i++) {
            var eachColumn = keys[i];
            opColumnArray.push(
                <TableHeaderColumn dataField={eachColumn}>utils.toTitleCase(eachColumn)</TableHeaderColumn>
            );
        }
        return opColumnArray;
    }
}



/**
 * 
 * Formattings related
 * //TODO: We can create separte wrapper to write these formattings...
 * 
 */

function enumFormatter(cell, row, enumObject) {
    return enumObject[cell];
}

function dateFormatter(cell, row) {
    if (typeof cell !== 'object') {
        cell = new Date(cell);
    }
    if (cell && cell.getDate()) {
        return `${('0' + cell.getDate()).slice(-2)}/${('0' + (cell.getMonth() + 1)).slice(-2)}/${cell.getFullYear()}`;
    }
    return `${(+ cell)}`
}



function currencyFormatter(cell, row) {
    cell = new Number(cell).toFixed(2);
    return `${'$' + cell}`;
}

function numberFormatter(cell, row) {
    cell = new Number(cell).toFixed(2);
    return `${cell}`;
}


function getcurrencySymbolbyCurrencyType(currencyType) {

    var currencySymbol = "";

    if (currencyType.toLowerCase() == "usd") {
        currencySymbol = "$"

    } else if (currencyType.toLowerCase() == "euro") {
        currencySymbol = "<"
    }
    return currencySymbol;

}





// //return grid columns....
// export function getNonLayoutGridColumns(data) {
//     //Here we are trying to take first object and based on that construct columns
//     if (data) {
//         var infoObj = data[0];
//         var keys = Object.keys(infoObj)
//         var opColumnArray = [];
//         for (var i = 0; i < keys.length; i++) {
//             var eachKey = keys[i];
//             var obj = { title: utils.toTitleCase(eachKey), dataIndex: eachKey, key: eachKey };
//             //For col1 and col2 apply fixed..
//             if (i === 0 || i === 1) {
//                 obj['fixed'] = "left";
//                 obj['width'] = 100;
//             }
//             opColumnArray.push(obj);
//         }
//         keys.forEach(element => {

//         });
//         return opColumnArray;
//     }
// }

//This function returns the distinct grpup names for given perspetcive
export function getDistinctISLKUPGrpNames(perspective, insightLkpMetaData) {
    //Collect respective perspective data 
    if (insightLkpMetaData && insightLkpMetaData.hasOwnProperty(perspective)) {
        var distinctLookups = [];
        var tempLookups = [];
        var inslkups = insightLkpMetaData[perspective];
        inslkups.forEach(element => {
            if (element.hasOwnProperty('ui_group_name')) {
                var grpName = element.ui_group_name;
                if (tempLookups.indexOf(grpName) == -1) {
                    tempLookups.push(grpName);
                    distinctLookups.push({ "label": grpName, order: element['ui_order'] });
                }
            }
        });
        JSON.stringify("Distinct grups----" + distinctLookups)
        return distinctLookups;
    }
}

//This function returns the distinct grpup nmaes for given perspetcive
export function getInslkupMetaData(insightLkpMetaData) {
    //Collect respective perspective data 
    var perspectives = ['enduser', 'reseller', 'lead', 'support'];
    var finalOp = Object.create(null);
    perspectives.forEach(persp => {
        var objByPers = Object.create(null);
        var grpNames = getDistinctISLKUPGrpNames(persp, insightLkpMetaData);

        var lookupsByPers = insightLkpMetaData[persp];
        grpNames.forEach(eachGrp => {
            var lkupsbyGrpName = getInsLkupsByGrpName(lookupsByPers, eachGrp['label']);
            // console.log("=================="+JSON.stringify(lkupsbyGrpName));
            //   eachEntry
            var grpName = eachGrp['label'];
            objByPers[grpName] = lkupsbyGrpName
        });
        finalOp[persp] = objByPers;
    });
    return finalOp;
}

//For the given groupname return the respective insightlookups falls under the group
export function getInsLkupsByGrpName(lookups, grpName) {
    var lookupsArray = [];
    lookups.forEach(lookup => {
        if (lookup.hasOwnProperty("ui_group_name")) {

            if (lookup.hasOwnProperty("ui_context") && (lookup.ui_context == "detailed_view" || lookup.ui_context == "datagaps")) {
                return;
            }
            if (lookup.ui_group_name == grpName) {
                var obj = {
                    "id": lookup['id'], "label": lookup.ui_perspective_srch_tooltip,
                    "toolTip": lookup.ui_label, "ww_scope": false, "editDim": lookup.hasOwnProperty('ui_edit_dims') ? true : false
                };
                //if lookup has property ui_ww_scope then add it,based on this we need to show country and global icons..
                if (lookup.hasOwnProperty("ui_ww_scope")) {
                    obj['ww_scope'] = true;
                }
                lookupsArray.push(obj);
            }
        }
    });
    return lookupsArray;
}

export function getNestedFormattedData(data) {
    //data comes as object..dt
    data.forEach(object => {
        getFormattedObject(object)
        //console.log("formatted Data is"+JSON.stringify(object));
    });
    return data;

}

export function getFormattedObject(data) {
    //data comes as object..dt
    data['data'] = {};
    for (var key in data) {
        console.log("typeof data[key]" + typeof data[key])
        if (typeof data[key] === 'string' || typeof data[key] === 'number') {
            data['data'][key] = data[key];
        }
        else {
            console.log("internal aray");
            Array.prototype.forEach.call(data[key], nestedObj => {
                getFormattedObject(nestedObj);
            });
            // var arrData = data[key];
            // console.log("internal aray:"+JSON.stringify(arr));

        }
    }
    return data;
}

//converts dimensions as children....
export function updateDimsAsChildren(data, dimensions) {
    for (var i = 0; i < dimensions.length; i++) {
        if (i > 0) {
            var pattern = new RegExp(dimensions[i], "ig");
            var json_str = JSON.stringify(data);
            json_str = json_str.replace(pattern, "children");
            var obj = JSON.parse(json_str);
            data = obj;
        }
    }
    return data;
}



export function getEntitledReport(data, measures) {
    var reportInfo = data;

    var groupedCollection = new Array();
    for (var i = 0; i < reportInfo.length; i++) {
        var obj = reportInfo[i];
        var date = convertStringToDate(obj[measures[0]['name']]);
        var currentDate = new Date();
        if (date >= currentDate) {
            groupedCollection.push({ product: obj['key'], status: "yes" });
        }
        else {
            groupedCollection.push({ product: obj['key'], status: "no" });
        }
    }
    return groupedCollection;
}



//Converts given "string date" to Date
export function convertStringToDate(dateStr) {

    var stringDate = dateStr;
    if (stringDate && stringDate.indexOf("T") > -1) {

        stringDate = stringDate.split("T")[0];
    }
    else if (stringDate && stringDate.indexOf("t") > -1) {

        stringDate = stringDate.split("t")[0];
    }
    else {
        if (stringDate && stringDate.indexOf("-") > -1) {
            var convertedDate = new Date(stringDate.split("-")[0], stringDate.split("-")[1] - 1, stringDate.split("-")[2])
            return convertedDate;
        }
    }

    return stringDate;
    /*else{
    Util.myAlert("Entitlement date is not in correct format","Error");
    }*/
}


