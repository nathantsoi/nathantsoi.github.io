var page=new WebPage,system=require("system");page.viewportSize={width:1024,height:768},page.paperSize={format:"letter",orientation:"landscape",margin:{left:"0",right:"0",top:"0",bottom:"0"}};var revealFile=system.args[1]||"index.html?print-pdf",slideFile=system.args[2]||"slides.pdf";null===slideFile.match(/\.pdf$/gi)&&(slideFile+=".pdf"),console.log("Printing PDF..."),page.open(revealFile,function(e){console.log("Printed succesfully"),page.render(slideFile),phantom.exit()});