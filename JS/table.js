//新增数据函数
function addData() {
    var table = document.getElementById("table");
    //console.log(table);
    //获取表格的行数
    var length = table.rows.length;
    //插入行节点
    var newRow=table.insertRow(length);
    //console.log(newRow);

    //插入节点到对象
    var nameCol=newRow.insertCell(0);
    var ageCol=newRow.insertCell(1);  
    var actionCol=newRow.insertCell(2);

    //设置节点的内容
    nameCol.innerHTML="未命名";
    ageCol.innerHTML="0";
    actionCol.innerHTML="<button onclick='edit(this)'>编辑</button><button onclick='deleteData(this)'>删除</button>";

    //删除数据函数
    function deleteData(button) {
        var tr=button.parentNode.parentNode;
        console.log(tr);
        tr.parentNode.removeChild(tr);
    }
}