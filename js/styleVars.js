var style = [   
			                ["street_1", 'street'],["street_2", 'street'],["street_3", 'street'], ["street_4", 'street'],["street_5", 'street'],
							["street_6", 'street'],["street_7", 'street'],["street_8", 'street'], ["street_9", 'street'],["street_10", 'street'],
							["street_11", 'street'],["street_12", 'street'],["street_13", 'street'], ["street_14", 'street'],["street_15", 'street'],
							["street_16", 'street'],["street_17", 'street'],["street_18", 'street'], ["street_19", 'street'],["street_20", 'street'],
							["street_21", 'street'],["street_22", 'street'],["street_23", 'street'], ["street_24", 'street'],["street_25", 'street'],
							["street_26", 'street'],["street_27", 'street'],["street_28", 'street'], ["street_29", 'street'],["street_30", 'street'],
							["street_31", 'street'],["street_32", 'street'],["street_33", 'street'], ["street_34", 'street']
							,
							["simple_1",'simple'],["simple_2",'simple'],["simple_3",'simple'],["simple_4",'simple'],["simple_5",'simple'],
							["simple_6",'simple'],["simple_7",'simple'],["simple_8",'simple'],["simple_9",'simple'],["simple_10",'simple'],
							["simple_11",'simple'],["simple_12",'simple'],["simple_13",'simple'],["simple_14",'simple'],["simple_15",'simple'],
							["simple_16",'simple'],["simple_17",'simple'],["simple_18",'simple'],["simple_19",'simple'],["simple_20",'simple'],
							["simple_21",'simple'],["simple_22",'simple'],["simple_23",'simple'],["simple_24",'simple'],["simple_25",'simple'],
							["simple_26",'simple'],["simple_27",'simple'],["simple_28",'simple'],["simple_29",'simple'],["simple_30",'simple']
							,
							["walk_1",'walk'],["walk_2",'walk'],["walk_3",'walk'],["walk_4",'walk'],["walk_5",'walk'],["walk_6",'walk'],
							["walk_7",'walk'],["walk_8",'walk'],["walk_9",'walk'],["walk_10",'walk'],["walk_11",'walk'],["walk_12",'walk'],
							["walk_13",'walk'],["walk_14",'walk'],["walk_15",'walk'],["walk_16",'walk'],["walk_17",'walk'],["walk_18",'walk'],
							["walk_19",'walk'],["walk_20",'walk'],["walk_21",'walk'],["walk_22",'walk'],["walk_23",'walk'],["walk_24",'walk'],["walk_25",'walk']
							,
							["formal_1",'formal'],["formal_2",'formal'],["formal_3",'formal'],["formal_4",'formal'],["formal_5",'formal'],["formal_6",'formal'],
							["formal_7",'formal'],["formal_8",'formal'],["formal_9",'formal'],["formal_10",'formal'],["formal_11",'formal'],["formal_12",'formal'],["formal_13",'formal']
							,["formal_14",'formal'],["formal_15",'formal']
						];

var brandImages = [
					["street_1", 'CHAMPION', 'http://joes-intl.championusa.kr/'],["street_2", 'CRITIC', 'http://www.criticwear.com'],["street_3", 'STUSSY', 'http://www.stussy.com'], ["street_4", 'SUPREME', 'http://www.supremenewyork.com'],
					["street_5", 'VANS', 'http://www.vans.co.kr'],
					["simple_1",'87MM', 'http://www.87mm.co.kr'],["simple_2",'AAA', 'http://www.alstyle.com'],["simple_3",'AMERICANAPPAREL', 'http://store.americanapparel.co.kr '],["simple_4",'COMMEDESGARCONS', 'http://www.comme-des.garcons.com'],
					["simple_5",'CONVERSE', 'http://www.converse.co.kr'],					
					["walk_1",'DICKIES', 'http://www.dickiesstreetwear.com'],["walk_2",'ROUNDHOUSE', 'http://dustworkwear.com'],["walk_3",'WALKERS', 'http://dustworkwear.com'],["walk_4",'CARHARTTWIP', 'http://www.carhartt-wip.co.kr'],
					["walk_5",'COVERNAT', 'http://www.covernat.net'],
					["formal_1",'BURBERRY', 'http://kr.burberry.com/store'],["formal_2",'CUSTOMELLOW', 'http://www.customellow.com'],["formal_3",'FERRAGAMO', 'http://www.ferragamo.com'],["formal_4",'HAZZYS', 'http://www.hazzys.com'],
					["formal_5",'PAUL SMITH', 'http://www.paulsmith.co.kr']
					];
					
var newsImages =[
                ["news_1", 'LOOKTIQUE','http://www.looktique.com'],["news_2",'HIPHOPER','http://www.hiphoper.com'],["news_3", 'IMAGINEKOREA.COM','http://www.imaginekorea.com'],
               ["news_4", 'VOGUE','http://www.vogue.co.kr'],["news_5",'MUSINSA','http://www.musinsa.com']
               ];
						
function setRand(min, max, number) {
				     randList = new Array();
				     for (i = min; i <= max; i++) {
				         randList.push(i);
				     }
				     for (i = 0; i < number; i++) {
				         getRand();
				     }
				   
			 }
			 
function getRand() {
		
		randNumber = Math.floor(Math.random() * randList.length);
     	randResult.push(randList[randNumber]);
     	randList.splice(randNumber, 1);
}
			
