const hbs=require('hbs');

hbs.registerHelper('Producto1',()=>{
    let fs=require('fs');
    let data=fs.readFileSync('./data/data.json');
    var words=JSON.parse(data);
    return words[0].Producto1;
});
hbs.registerHelper('Producto2',()=>{
    let fs=require('fs');
    let data=fs.readFileSync('./data/data.json');
    var words=JSON.parse(data);
    return words[1].Producto2;
});
hbs.registerHelper('Producto3',()=>{
    let fs=require('fs');
    let data=fs.readFileSync('./data/data.json');
    var words=JSON.parse(data);
    return words[2].Producto3;
});