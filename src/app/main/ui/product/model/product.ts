import { category } from "../../category/model/category";


export interface Product{
	  nameFR? :String ;
	  nameEN? :String ;
	  descriptionFR? :String;
	  descriptionEN? :String;
	  paletFR? :String;
	  paletEN?:String;
	  boxpalet? :number;
	  netweightpalet? :number;
	  grosweightpalet?:number;
	  heightpalet ?:number;
	  palet20 ?:number;
	  palet40 ?:number;
      istop ?:boolean;
      image?  :any;
      cat  ?:number;
}
