import fs from 'fs';
import {parse} from 'csv-parse/sync'

export class DataProvider{

    //method read json file in array format
 static getTestDataFromJson(filePath:string){
    let data:any = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    return data;
 }

 //read data from csv
 static getTestdataFromCSV(filePath:string){
    let data:any = fs.readFileSync(filePath);
    parse(fs.readFileSync(filePath),{columns:true,skip_empty_lines:true})
      //parse(data,{columns:true,skip_empty_lines:true})
    return data;
 }



}