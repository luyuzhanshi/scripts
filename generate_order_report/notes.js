// // Okay – next steps:
// //
// // I added in vendor IDs and Factory IDs to the “vendor_supplier_factory_dates_totals” worksheet.
// //
// // I need you to look at the “Due for Audit 4-10-2018” worksheet, which also contains brand-vendor-factory w/ IDs, and tell me the  Total SO Ext ELC and Last Delivery Date for each line.
// //
// // Vendor ID	Vendor	Factory ID	Factory Name	Total SO Ext ELC	Last Delivery Date
// // 13347	4 WhatItsWorth, Inc. - Catherines	5199	Guangzhou Hong YingDa Garment Co.,Ltd	-	-
// // 13347	4 WhatItsWorth, Inc. - Catherines	3763	Jiangsu Guotai International Group Rugao Garment Co.,Ltd	$209,675	2/12/2018
// // 13347	4 WhatItsWorth, Inc. - Catherines	4562	Jiangyin Keyan Clothing Co., Ltd.	-	-
// //
// //
// // Here’s an example from the ‘due for audit’ sheet; the vendor 4whatitsworth for Catherines only had orders for the fty # 3763; so I need the Total SO Ext ELC and Last Delivery Date indicated for each line even if it’s nothing.
// //
// // Please keep the due for audit spreadsheet intact, meaning all the columns.
// //
// // Because the last part of this project is populating a third spreadsheet w/ the data. That sheet is titled ‘ELEVATE_ascena Multiple Assessments…..’
// // We need columns N-W and AC populated. But let’s not worry about that yet.
// //
// // Let me know if you’d like to discuss.
// // I realize it may not be possible to finish before EOD. Let me know your thoughts and if you’d like to discuss.
// //
// // Thanks,
// // Carly
// Vendor ID	Vendor	Factory ID	Factory Name	Factory Status	Factory Address 1	Factory Address 2	Factory City	Factory State-province	Factory Country	Activity Type	S: Date	Rating	Transparency
// 165508	1211 Productions LLC (AGSHK)	2527	Haphong Export Garment JSC	Active	Doan Bai Commune	Hiep Hoa District	Bac Giang		Vietnam	Annual ELEVATE	12/7/2015	C	1
// 141129	2253 Clothing Inc Dba Celebrity Pink - Maurices	3757	Changzhou Xinchao Garment Co., Ltd.	Active	No. 12 North Yang Road, Tianning Development Zone		Changzhou	Jiangsu	China	Initial AGS Lisa Hou	5/24/2017	B	1
// 141129	2253 Clothing Inc Dba Celebrity Pink - Maurices	4827	Henan Guotai Hengguang Apparel Co., Ltd.	Active	999 Ping Qiao Avenue, Industry Cluster	PingQiao Industrial Park	Xinyang	Henan	China	Annual AGS Lisa Hou	6/12/2017	C	1
// 141129	2253 Clothing Inc Dba Celebrity Pink - Maurices	4471	Jiang Yin Weilong Clothing Co., Ltd.	Active	NO.102 RENMING ROAD	QIAOQI	JIANGYIN	Jiangsu	China	Follow-up 1 AGS Lisa Hou	7/19/2016	C	2
// 13347	4 WhatItsWorth, Inc. - Catherines	5199	Guangzhou Hong YingDa Garment Co.,Ltd	Active	NO.140 Taipingyang Industry Zone,	Xintang Town,Zengcheng	Guangzhou	Guang Dong	China	Initial AGS Leah Socker	5/16/2017	C	1
// 13347	4 WhatItsWorth, Inc. - Catherines	3763	Jiangsu Guotai International Group Rugao Garment Co.,Ltd	Active	Hezhuang Cun, Yuanqiao Town		Rugao	Jiangsu	China	Follow-up 1 ELEVATE	10/19/2016	B	1
// 13347	4 WhatItsWorth, Inc. - Catherines	4562	Jiangyin Keyan Clothing Co., Ltd.	Active	No.77 East Renmin Road	Qiaoqi Xuxiake Town	Jiangyin	Jiangsu	China	Annual ELEVATE	8/24/2016	C	2
// 2884	4 WhatItsWorth, Inc. - Dressbarn	5199	Guangzhou Hong YingDa Garment Co.,Ltd	Active	NO.140 Taipingyang Industry Zone,	Xintang Town,Zengcheng	Guangzhou	Guang Dong	China	Initial AGS Leah Socker	5/16/2017	C	1
// 2884	4 WhatItsWorth, Inc. - Dressbarn	4562	Jiangyin Keyan Clothing Co., Ltd.	Active	No.77 East Renmin Road	Qiaoqi Xuxiake Town	Jiangyin	Jiangsu	China	Annual ELEVATE	8/24/2016	C	2
// 3116	505 Sonoma Corp./GIC Int'l - Dressbarn	5501	Chaoan Weisong Shoe Co.Ltd	Active	Xiatangchi Industrial Zone, Litang No.2 Village	Caitang Town, Chaoan County 	Chaozhou	Guangdong	China	Initial ELEVATE	6/27/2017	C	1
// 79570	505 Sonoma Corp./GIC Int'l - Maurices	5501	Chaoan Weisong Shoe Co.Ltd	Active	Xiatangchi Industrial Zone, Litang No.2 Village	Caitang Town, Chaoan County 	Chaozhou	Guangdong	China	Initial ELEVATE	6/27/2017	C	1
// 79570	505 Sonoma Corp./GIC Int'l - Maurices	4588	Chengheng Garment Co., Ltd	Active	Dienanyi Road, Guicheng, Nanhai		Foshan	Guangdong	China	Annual ELEVATE	6/22/2017	B	1
// 120508	88 International - Maurices	4789	Foeyal (Taishan) Garment Company Limited	Active	NO.1 WAI MAO KAI FA QU BAN GANG		Taishan	Guangdong	China	Follow-up 1 ELEVATE	10/20/2016	C	1
// 120508	88 International - Maurices	3977	Jin Qiu Hua Garment Industry Co. Ltd.	Active	No.6 Baishi Village, Development, Zengcheng Zone, Xintang Town		Guangzhou	Guangdong	China	Annual ELEVATE	11/29/2016	B	1
// 2245	88 International Inc. - Dressbarn	4789	Foeyal (Taishan) Garment Company Limited	Active	NO.1 WAI MAO KAI FA QU BAN GANG		Taishan	Guangdong	China	Follow-up 1 ELEVATE	10/20/2016	C	1
// 2245	88 International Inc. - Dressbarn	3977	Jin Qiu Hua Garment Industry Co. Ltd.	Active	No.6 Baishi Village, Development, Zengcheng Zone, Xintang Town		Guangzhou	Guangdong	China	Annual ELEVATE	11/29/2016	B	1
// 649	A.W. Items Inc - Dressbarn	4993	Zhejiang Luxury Fengrun Fashion Accessories Co., Ltd.	Active	No. 288 Hanghai Road, Yuyue Industrial Zone, Yuyue Town		Deqing	Zhejiang	China	Follow-up 1 ELEVATE	5/5/2017	C	1
// 1111	ABG Accessories - Justice	4998	Jurong Hongye Knitting Co., Ltd.	Active	Baitu Town		Jurong	Jiangsu	China	Initial ELEVATE	3/30/2016	D	4
// 1111	ABG Accessories - Justice	4999	Wenling Mingshi Hats Co., Ltd.	Active	Niwu Village, Ruoheng Town		Wenling	Zhejiang	China	Initial ELEVATE	5/11/2016	C	1
// 82	Accent Accessories - Dressbarn	3402	Chenjoo Jewelry Factory	Active	2nd Floor, Building 1, #86 Xiahe Road	BeiYuan Industrial Zone	Yiwu	Zhejiang	China	Follow-up 1 Sumerra	5/25/2015	~Empty	1
// 82	Accent Accessories - Dressbarn	3651	Yiwu Dreamwork Jewelry Co.,Ltd	Active	206 Yongjun Road,Beiyuan District		Yiwu	Zhejiang	China	Follow-up 1 ELEVATE	6/17/2015	D	4
// 82	Accent Accessories - Dressbarn	3743	Yiwu Red Cherry Mfg	Active	3Rd Floor, No.187 South Chunhan Road, Beiyuan		Yiwu	Yiwu	China	Follow-up 1 ELEVATE	12/24/2014	C	1
// 77361	Accent Accessories - Justice	3402	Chenjoo Jewelry Factory	Active	2nd Floor, Building 1, #86 Xiahe Road	BeiYuan Industrial Zone	Yiwu	Zhejiang	China	Follow-up 1 Sumerra	5/25/2015	~Empty	1
// 996698	Achiever Apparels Pvt Ltd - Dressbarn	3704	M/S Achiever Apparels Pvt Ltd	Active	A-7, Infocity, Sector -34		Gurgaon	Haryana	India	Annual ELEVATE	9/12/2016	D	4
// 10528	Acme-Mccrary Corp. - Catherines	4674	Yixing Yidie Knitting Co., Ltd	Active	No.1 Yidie Road, Xinjian Town		Yixing	JiangSu	China	Annual ELEVATE	8/23/2016	C	2
// 1246	Acme-Mccrary Corp. - Lane Bryant	4674	Yixing Yidie Knitting Co., Ltd	Active	No.1 Yidie Road, Xinjian Town		Yixing	JiangSu	China	Annual ELEVATE	8/23/2016	C	2
// 91461	After the Rain International - Catherines	4850	Jiangyin Polman Knitting Garments Co., Ltd.	Active	No. 58 Yungu Road, Zhutang Town		Jiangyin	Jiangsu	China	Annual BSI	5/31/2017	~Empty	1
// 8408	AGSHK	4670	Asia Garment Limited Company	Active	Lieu Ha Village, Tan Lap Commune，	Yen My Town, Yen My District	Yen My	Hung yen	Vietnam	Annual AGS Lisa Hou	5/8/2017	C	1
// 8408	AGSHK	3968	Beyond(Hangzhou)Apparel Manufacturing Co.,Ltd	Active	No.139 Ningshui Rd,Xiaoshan		Hangzhou	Zhejiang	China	Annual ELEVATE	6/16/2016	C	1
// 8408	AGSHK	3760	Century Miracle Apparel Manufacturing Co., Ltd	Active	P.O. Box # 5	Al Hassan Industrial	Ramtha	Ramtha	Jordan	Annual ELEVATE	11/2/2016	B	1
// 8408	AGSHK	4605	Changting  Nanxiang  Knitting  Co.,Ltd.	Active	Tengfei  Industrial Development Zone, Changting County		Longyan	Fujian	China	Initial ELEVATE	7/1/2015	C	1
// 8408	AGSHK	4088	Changzhou Tooku Garment Co Ltd branch the whole package factory	Active	No.2 Jinghu Road	New North District	Changzhou	Jiangsu	China	Follow-up 1 AGS Leah Socker	3/23/2017	D	1
// 8408	AGSHK	3757	Changzhou Xinchao Garment Co., Ltd.	Active	No. 12 North Yang Road, Tianning Development Zone		Changzhou	Jiangsu	China	Initial AGS Lisa Hou	5/24/2017	B	1
// 8408	AGSHK	5249	Creative Collections Ltd.	Active	69 & 107 Nishat Nagar, Tongi	Gazipur	Dhaka		Bangladesh	Initial ELEVATE	10/27/2016	C	1
// 8408	AGSHK	4855	Crystal Martin (Vietnam) Company Limited	Active	Lot R (R1) Quang Chau Industrial Park		Viet Yen	Bac Giang	Vietnam	Annual AGS Lisa Hou	5/17/2017	B	1
// 8408	AGSHK	2834	Delta Garment Factory (Shantou) Co. Ltd	Active	3-5th Floor, No.2 Yanhe Road	Shengping Industrial Estate, Jin Ping District	Shantou	Guangdong	China	Annual ELEVATE	8/31/2016	C	1
// 8408	AGSHK	3617	Delta Starmark Garment (Vietnam) Co., Ltd.	Active	No. 5 Thong Nhat Ave. Song Than Industrial Zone II	Di An Street	Bing Duong	Bing Duong	Vietnam	Annual BSI	6/23/2016	~Empty	1
// 8408	AGSHK	3613	Dongguan Duosen Accessory Co., Ltd.	Active	No.1 Nanshe Road	Dongfeng Village, Humen Town	Dongguan	Guangdong	China	Initial Sumerra	5/25/2015	~Empty	1
// 8408	AGSHK	4337	Dongguan GoGo Garment Manufacturing Limited	Active	Xin Zhou Industrial District		Dongguan	Guangdong	China	Annual ELEVATE	8/29/2016	B	1
// 8408	AGSHK	3975	Dongguan Quality Knitwear Limited	Active	Shujiu Village, Changping Town		Dongguan	Guangdong	China	Annual AGS Lisa Hou	6/16/2017	C	1
// 8408	AGSHK	3034	Dongguan Xinxin Accessories Manufacture	Active	Songbotang Directorial Area	Chang Ping Village	Dongguan	Guangdong	China	Annual AGS Leah Socker	3/10/2016	D	4
// 8408	AGSHK	2034	Erong Bags Manufactory Co. Ltd	Active	Jinxi Development Area	Wucheng District	Jin Hua City	Zhengjiang	China	Annual ELEVATE	8/1/2016	C	2
// 8408	AGSHK	5248	Feng Ming Handbag Factory	Active	No.1 Zhongxing Street	Jinsong Raod, Quanttang, Liaobu Town	Dongguan	Guangdong	China	Follow-up 1 AGS Lisa Hou	12/23/2016	B	1
// 8408	AGSHK	4974	First Smart (ASIA) Ltd.	Active	No. 1 Industrial Zone	Quannan County	Ganzhou	Jiangxi	China	Annual AGS Lisa Hou	5/25/2017	C	1
// 8408	AGSHK	4074	Foshan Nanhai Top Form Underwear Co., Ltd.	Active	Block A, Jian She Xi Road	Yanbu, Dali Town	Foshan	Guangdong	China	X_Follow-up 1 AGS Sammy Yu	10/27/2015	A	1
// 8408	AGSHK	3974	FTN Vietnam Co., Ltd.	Active	Lot J2-Cn, D1 Street, My Phuoc Industrial Park		Ben Cat District	Binh Duong	Vietnam	Annual AGS Lisa Hou	6/27/2017	C	1
// 8408	AGSHK	3189	Fuqing Zhaoxia Footwear Co., Ltd.	Active	Yuxi Industrial Zone, Yuxi Town		Fuqing	Fujian	China	Annual AGS Lisa Hou	12/19/2016	B	1
// 8408	AGSHK	1165	Gao Yao St. Sarah Gmt Devp Co,Ltd	Active	Jan Qiao Industrial Area, Xin Qiao Town		Gao Yao	Guangdong	China	Annual AGS Lisa Hou	12/21/2016	C	1
// 8408	AGSHK	4618	GG Vina	Active	No 226, Le Lai Street, May Chai Ward,	Ngo Quyen District	Hai Phong		Vietnam	Follow-up 1 ELEVATE	5/11/2017	A	1
// 8408	AGSHK	2962	Guangdong Singwear Garments Co., Ltd.	Active	Xianggang Industrial Park Simapu	Town, Chaonan District	Shantou	Guangdong	China	Annual ELEVATE	9/1/2016	C	1
// 8408	AGSHK	3347	Hai Feng United Peak Knitting Co., Ltd	Active	31 Jui Rd. GuangShan GongLu Bei Ce, Chi’An GongYeQu, ChengDong Zhen,HaiFeng Xian		ShanWei	GuangDong	China	Annual AGS Lisa Hou	5/23/2017	C	2
// 8408	AGSHK	2527	Haphong Export Garment JSC	Active	Doan Bai Commune	Hiep Hoa District	Bac Giang		Vietnam	Annual ELEVATE	12/7/2015	C	1
// 8408	AGSHK	5509	He Yuan Hop Lun Fashion Ltd.	Active	No.4 Technical Road, Hi-Tech Industrial Zone		He Yuan	Guangdong	China	Initial AGS Lisa Hou	7/4/2017	C	1
// 8408	AGSHK	4827	Henan Guotai Hengguang Apparel Co., Ltd.	Active	999 Ping Qiao Avenue, Industry Cluster	PingQiao Industrial Park	Xinyang	Henan	China	Annual AGS Lisa Hou	6/12/2017	C	1
// 8408	AGSHK	4609	Heping Youya Underwear Company Ltd	Active	1, 3/f, No. 9 (north), Fu He Industrial Transfer Zone.	Yangming Town, Heyuan City, Heping County	Heyuan	Guangdong	China	Annual AGS Lisa Hou	12/29/2016	C	1
//
//
//
//
//
// SO Factory Name	Factory ID	Brand-Vendor	Vendor ID	Brand	SO Vendor Name	 Total SO Ext ELC 	Last Delivery Date
// (XI HUA) KAI HONG SHOES CO. LTD	3472	MAURICES-JELLY POP SHOES/EVOLUTIO	79652	MAURICES	JELLY POP SHOES/EVOLUTIO	$2,493,943.70 	8/20/2018
// A AND T NICARAGUA S.A.	4236	CATHERINES-CUPID FOUNDATIONS INC	2596	CATHERINES	CUPID FOUNDATIONS INC	$786,924.53 	4/23/2018
// ACME-MCCRARY CORPORATION	4922	CATHERINES-ACME-MCCRARY CORP.	10528	CATHERINES	ACME-MCCRARY CORP.	$500,279.63 	4/23/2018
// ACME-MCCRARY CORPORATION	4922	DRESSBARN-ACME-MCCRARY CORP.	84	DRESSBARN	ACME-MCCRARY CORP.	$1,213,752.78 	7/2/2018
// ACME-MCCRARY HONDURAS S DE RL	4923	CATHERINES-ACME-MCCRARY CORP.	10528	CATHERINES	ACME-MCCRARY CORP.	$370,975.73 	1/29/2018
// AN PHUC GARMENT EXPORT TRADING	4691	DRESSBARN-FENOMENON FASHION INC.	2779	DRESSBARN	FENOMENON FASHION INC.	$2,715,340.40 	5/21/2018
// ANANTA GARMENTS LTD	5604	JUSTICE-AGS HK	8408	JUSTICE	AGS HK	$1,195,330.98 	7/30/2018
// ANDY GIFT AND PACK CO. LTD.	4784	JUSTICE-MERI MERI INC	91279	JUSTICE	MERI MERI INC	$7,661.50 	2/5/2018
// ANGEL JEWELRY CO. LTD.	3901	JUSTICE-NES JEWELRY INC	91211	JUSTICE	NES JEWELRY INC	$531,844.54 	6/18/2018
// ANHUI SPRINGAIR FASHION CO.LTD	4507	CATHERINES-AGS HK	8408	CATHERINES	AGS HK	$869,393.68 	6/11/2018
// ANHUI SPRINGAIR FASHION CO.LTD	4507	CATHERINES-REUNITED CLOTHING	13291	CATHERINES	REUNITED CLOTHING	$11,888.24 	9/11/2017
// ANHUI SPRINGAIR FASHION CO.LTD	4507	DRESSBARN-AGS HK	8408	DRESSBARN	AGS HK	$76,352.00 	8/21/2017
// ANHUI SPRINGAIR FASHION CO.LTD	4507	DRESSBARN-AGS SH	85073	DRESSBARN	AGS SH	$5,926,534.51 	5/14/2018
// ANHUI SPRINGAIR FASHION CO.LTD	4507	DRESSBARN-SALTY INC	7731	DRESSBARN	SALTY INC	$70,517.40 	4/16/2018
// ANHUI SPRINGAIR FASHION CO.LTD	4507	JUSTICE-AGS SH	85073	JUSTICE	AGS SH	$316,473.76 	10/23/2017
// ANHUI SPRINGAIR FASHION CO.LTD	4507	LANE BRYANT-REUNITED CLOTHING	13291	LANE BRYANT	REUNITED CLOTHING	$5,668,004.13 	7/23/2018
// ANHUI SPRINGAIR FASHION CO.LTD	4507	LANE BRYANT-SALTY INC	91302	LANE BRYANT	SALTY INC	$264,544.35 	3/5/2018
// ANHUI SPRINGAIR FASHION CO.LTD	4507	MAURICES-AGS SH	85073	MAURICES	AGS SH	$1,649,843.98 	2/26/2018
// ANHUI YISHIJIE GARMENT CO. LTD	4866	DRESSBARN-KRAZY KAT SPORTSWEAR	5032	DRESSBARN	KRAZY KAT SPORTSWEAR	$1,234,163.75 	5/21/2018
// ANHUI YISHIJIE GARMENT CO. LTD	4866	DRESSBARN-SECRET CHARM LLC	7816	DRESSBARN	SECRET CHARM LLC	$131,617.50 	2/19/2018
// ANHUI YISHIJIE GARMENT CO. LTD	4866	DRESSBARN-SHANGHAI SHENDA II LLC	7821	DRESSBARN	SHANGHAI SHENDA II LLC	$365,532.00 	4/30/2018
// ANHUI YISHIJIE GARMENT CO. LTD	4866	MAURICES-BAILEY BLUE LLC	66178	MAURICES	BAILEY BLUE LLC	$664,651.45 	5/21/2018
// ANHUI YISHIJIE GARMENT CO. LTD	4866	MAURICES-STONY APPAREL INC	31730	MAURICES	STONY APPAREL INC	$1,300,762.11 	7/16/2018
// ANHUI YISHIJIE GARMENT CO. LTD	4866	MAURICES-TRIXXI CLOTHING CO. INC.	33750	MAURICES	TRIXXI CLOTHING CO. INC.	$143,290.85 	1/29/2018
// ANHVU GARMENT IMPORT-EXPORT COMPANY LTD	4047	DRESSBARN-R.M.L.L. D/B/A CAROLE WREN INC.	1297	DRESSBARN	R.M.L.L. D/B/A CAROLE WREN INC.	$2,173,153.80 	6/18/2018
// APPLE FASHION CO. LTD	3832	DRESSBARN-RONNIE NICOLE/THARAN CO. DRESS GROUP LLC	7558	DRESSBARN	RONNIE NICOLE/THARAN CO. DRESS GROUP LLC	$93,609.00 	1/29/2018
// APPLE FASHION CO. LTD	3832	DRESSBARN-STUDIO ONE	8200	DRESSBARN	STUDIO ONE	$151,509.00 	5/7/2018
// APPLE FASHION CO. LTD	3832	DRESSBARN-ZG APPAREL GROUP LLC	9872	DRESSBARN	ZG APPAREL GROUP LLC	$746,236.00 	5/14/2018
// APPLE FASHION CO. LTD	3832	LANE BRYANT-STUDIO ONE	7599	LANE BRYANT	STUDIO ONE	$482,431.00 	5/7/2018
// APPLE FASHION CO. LTD	3832	LANE BRYANT-ZG APPAREL GROUP LLC	91419	LANE BRYANT	ZG APPAREL GROUP LLC	$1,588,391.60 	5/7/2018
// ASIA AUTOMAX SHANGHAI CO. LTD.	5059	LANE BRYANT-LEG APPAREL LLC.	13103	LANE BRYANT	LEG APPAREL LLC.	$94,098.20 	6/11/2018
// ASIA GARMENT LIMITED COMPANY	4670	CATHERINES-AGS HK	8408	CATHERINES	AGS HK	$141,675.46 	4/23/2018
// ASIA GARMENT LIMITED COMPANY	4670	DRESSBARN-AGS HK	8408	DRESSBARN	AGS HK	$1,654,650.37 	5/7/2018
// ASIA GARMENT LIMITED COMPANY	4670	JUSTICE-AGS HK	8408	JUSTICE	AGS HK	$1,917,295.49 	5/21/2018
// ASIA GARMENT LIMITED COMPANY	4670	LANE BRYANT-AGS HK	8408	LANE BRYANT	AGS HK	$3,608,523.03 	5/14/2018
// ASIA GARMENT LIMITED COMPANY	4670	MAURICES-AGS HK	8408	MAURICES	AGS HK	$5,227,127.77 	8/13/2018
// ATRIUM ASSEMBLY CORPORATION	2164	JUSTICE-ATRIUM ASSEMBLY CORPORATI	7888	JUSTICE	ATRIUM ASSEMBLY CORPORATI	$3,587,548.94 	5/21/2018
// ATRIUM ASSEMBLY CORPORATION	2164	JUSTICE-FREEZE A DIVISION OF	64930	JUSTICE	FREEZE A DIVISION OF	$7,201.25 	2/19/2018
// ATRIUM ASSEMBLY CORPORATION	2164	JUSTICE-HAPPY THREADS LLC	91481	JUSTICE	HAPPY THREADS LLC	$1,840.50 	2/19/2018
// ATRIUM ASSEMBLY CORPORATION	2164	JUSTICE-HYBRID APPAREL	76562	JUSTICE	HYBRID APPAREL	$8,992.50 	1/1/2018
// ATRIUM ASSEMBLY CORPORATION	2164	JUSTICE-ISAAC MORRIS LTD	70049	JUSTICE	ISAAC MORRIS LTD	$3,766.25 	12/4/2017
// AURORA WORLD JUNAN CO. LTD	2337	JUSTICE-AURORA WORLD INC.	70282	JUSTICE	AURORA WORLD INC.	$1,143,967.76 	7/9/2018
// BAJA GARMENTS/TEXTILES RUSHANYAN S.A. DE C.V	5598	LANE BRYANT-NEXT GENERATION INTIMATES INC.	5644	LANE BRYANT	NEXT GENERATION INTIMATES INC.	$1,268,992.40 	10/8/2018
// BANDO FASHION SA	4200	DRESSBARN-LAND N SEA/COUNTERPARTS	1579	DRESSBARN	LAND N SEA/COUNTERPARTS	$1,245,486.15 	6/4/2018
// BATH CONCEPT COSMETICS (DONGGUAN) CO. LTD.	4240	JUSTICE-LF PRODUCTS PTE. LTD	78351	JUSTICE	LF PRODUCTS PTE. LTD	$3,017,999.22 	8/27/2018
// BATH CONCEPT COSMETICS (DONGGUAN) CO. LTD.	4240	JUSTICE-MG PARTNERS LLP DBA FASHION ANGELS ENT.	70319	JUSTICE	MG PARTNERS LLP DBA FASHION ANGELS ENT.	$256,399.00 	7/2/2018
// BELLE FASHIONS S. DE R.L DE CV	5659	MAURICES-KASH APPAREL	75825	MAURICES	KASH APPAREL	$114,008.25 	4/9/2018
// BEYOND(HANGZHOU)APPAREL MANUFACTURING CO.LTD	3968	CATHERINES-AGS HK	8408	CATHERINES	AGS HK	$1,620,509.92 	6/4/2018
// BEYOND(HANGZHOU)APPAREL MANUFACTURING CO.LTD	3968	DRESSBARN-AGS HK	8408	DRESSBARN	AGS HK	$83,486.88 	12/18/2017
// BHAVIK TERRYFAB	5530	JUSTICE-SATURDAY KNIGHT LTD	91465	JUSTICE	SATURDAY KNIGHT LTD	$240,107.70 	4/30/2018
// BINJIE JEWELRY FACTORY (XINYU INDUSTRY AND TRADE LIMITED)	4699	MAURICES-NITIN ENTERPRISES	79174	MAURICES	NITIN ENTERPRISES	$152,417.80 	5/7/2018
// BO LI HANDBAG FACTORY	4868	JUSTICE-OMG! ACCESSORIES	91281	JUSTICE	OMG! ACCESSORIES	$46,628.40 	9/25/2017
// BOSSONG HOSIERY	2352	CATHERINES-BOSSONG HOSIERY	11369	CATHERINES	BOSSONG HOSIERY	$521,936.43 	9/3/2018
// BOSSONG HOSIERY	2352	LANE BRYANT-BOSSONG HOSIERY	11369	LANE BRYANT	BOSSONG HOSIERY	$1,019,338.95 	7/2/2018
// BRANCH OF POONG IN VINA CO. LTD.	5090	DRESSBARN-AGS KOR	8483	DRESSBARN	AGS KOR	$499,399.37 	12/18/2017
// BRANCH OF POONG IN VINA CO. LTD.	5090	MAURICES-AGS KOR	8483	MAURICES	AGS KOR	$286,928.48 	11/13/2017
// BRANDIX APPAREL SOLUTIONS	4932	CATHERINES-MGF SOURCING	5513	CATHERINES	MGF SOURCING	$246,310.03 	7/23/2018
// BRANDIX APPAREL SOLUTIONS	4932	LANE BRYANT-MGF SOURCING	5513	LANE BRYANT	MGF SOURCING	$26,769,047.59 	10/22/2018
// BRANDIX APPAREL SOLUTIONS LIMITED - ESSENTIALS RAMBUKKANA	5701	LANE BRYANT-MGF SOURCING	5513	LANE BRYANT	MGF SOURCING	$133,683.25 	7/30/2018
// BRANDIX APPAREL SOLUTIONS LTD. NIVIT	4933	LANE BRYANT-MGF SOURCING	5513	LANE BRYANT	MGF SOURCING	$7,212,704.97 	7/2/2018
// C&J ACCESSORIES VINA CO. LTD	5337	MAURICES-FIESTA JEWELRY	12785	MAURICES	FIESTA JEWELRY	$106,845.80 	3/5/2018
// CALIFORNIA CUTTING & SEWING	5156	CATHERINES-BLUPRINT CLOTHING CORP	12839	CATHERINES	BLUPRINT CLOTHING CORP	$335,258.30 	5/7/2018
// CALIFORNIA CUTTING & SEWING	5156	DRESSBARN-BLUPRINT CLOTHING CORP	995	DRESSBARN	BLUPRINT CLOTHING CORP	$1,186,606.70 	6/25/2018
// CANDY/FOOD	9	JUSTICE-IMPACT CONFECTIONS	206	JUSTICE	IMPACT CONFECTIONS	$31,352.16 	3/26/2018
// CANDY/FOOD FACTORY	2	JUSTICE-A&A GLOBAL INDUSTRIES DBA KOKO S CONFECTIONS	591	JUSTICE	A&A GLOBAL INDUSTRIES DBA KOKO S CONFECTIONS	$69,259.08 	4/16/2018
// CANDY/FOOD FACTORY	2	JUSTICE-ADAMS & BROOKS INC	668	JUSTICE	ADAMS & BROOKS INC	$11,105.28 	2/19/2018
// CANDY/FOOD FACTORY	2	JUSTICE-MEDERER USA INC	69878	JUSTICE	MEDERER USA INC	$109,982.88 	4/16/2018
// CANDY/FOOD FACTORY	2	JUSTICE-TOYSMITH	70308	JUSTICE	TOYSMITH	$186,344.10 	12/25/2017
// CENTEXSA S.A.	4979	MAURICES-AGS KOR	8483	MAURICES	AGS KOR	$75,999.60 	5/14/2018
// CENTURY MIRACLE APPAREL MANUFACTURING CO. LTD	3760	LANE BRYANT-AGS HK	8408	LANE BRYANT	AGS HK	$3,530,637.91 	9/3/2018
// CENTURY MIRACLE APPAREL MANUFACTURING CO. LTD	3760	MAURICES-AGS HK	8408	MAURICES	AGS HK	$245,581.60 	8/13/2018
// CHAN EN KNITTING CO. LTD.	3425	MAURICES-DESIGN NETWORK	69042	MAURICES	DESIGN NETWORK	$228,456.60 	7/9/2018
// CHANGSHU TONGYING FASHION CO. LTD	1804	CATHERINES-FASHION AVENUE KNITS	3266	CATHERINES	FASHION AVENUE KNITS	$72,627.25 	9/11/2017
// CHANGSHU TONGYING FASHION CO. LTD	1804	MAURICES-AVALON APPAREL GROUP	63938	MAURICES	AVALON APPAREL GROUP	$2,860,447.50 	7/16/2018
// CHANGSHU TONGYING FASHION CO. LTD	1804	MAURICES-KELLWOOD	87659	MAURICES	KELLWOOD	$1,514,663.13 	7/16/2018
// CHANGTING  NANXIANG  KNITTING  CO.LTD.	4605	DRESSBARN-AGS SH	85073	DRESSBARN	AGS SH	$147,092.09 	6/4/2018
// CHANGTING  NANXIANG  KNITTING  CO.LTD.	4605	MAURICES-AGS SH	85073	MAURICES	AGS SH	$262,701.76 	2/5/2018
// CHANGZHOU CHINA CREATION KNITTING GARMENTS CO. LTD	1949	CATHERINES-AGS HK	8408	CATHERINES	AGS HK	$88,139.29 	2/19/2018
// CHANGZHOU CHINA CREATION KNITTING GARMENTS CO. LTD	1949	DRESSBARN-AGS SH	85073	DRESSBARN	AGS SH	$43,886.40 	11/20/2017
//
