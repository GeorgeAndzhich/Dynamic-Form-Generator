const fs = require('fs')

const JsonString = fs.readFileSync('./data.json','utf-8')
const data = JSON.parse(JsonString)
createForm(data);
var body = document.getElementsByTagName('body');

function createForm(arrData){
    var form = document.createElement('form')
    for(i=0;;i++){
        var input = data.input[i].type
       switch(input){
           case 'text':

           case 'textarea':

           case 'number':

           case 'checkbox':

           case 'color':

           case 'date':

           case 'datetime-local':

           case 'time':

           case 'password':

           case 'radio':

           case 'image':

           case 'file':

           case 'tel':

           case 'password':

       }
    }
}