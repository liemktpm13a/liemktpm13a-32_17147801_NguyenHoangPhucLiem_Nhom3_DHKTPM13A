$(document).ready(function () {
    var i = 1;
    $("#btn2").click(function () {
        $("#myModal").modal();
    });

    function checkValidName() {
        var i = 1;
        let reg = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#name").val()==""){
            $("#tbName").html("Vui lòng nhập dữ liệu");
            return false;
        }
        if(!reg.test($("#name").val())){
            $("#tbName").html("Không đúng định dạng");
            return false;
        }
        $("#name").html("*");
        return true;
    }
    $("#name").blur(checkValidName);

    function checkValidNumberAo() {
        var i = 1;
        let reg = /^\d*$/;
        if($("#numberAo").val()==""){
            $("#tbNumber").html("Vui lòng nhập dữ liệu");
            return false;
        }
        if(!reg.test($("#numberAo").val())){
            $("#tbNumber").html("Vui lòng nhập từ 1-100");
            return false;
        } else {
            var soAo = $("numberAo").val();
            if(soAo<1||soAo>100){
                $("#tbNumber").html("Vui lòng nhập từ 1-100");
            } else{
                $("#tbNumber").html("*");
                return true;
            }
        }       
    }
    $("#numberAo").blur(checkValidNumberAo);

    function checkValidNTT() {
        if($("#dateTT").val()=""){
            $("#tbDate").html("Vui lòng chọn ngày");
            return false;
        }
        var recentDate = new Date();
        var ntt = new Date($("#dateTT").val()+7);
        if(recentDate>ntt){
            $("#tbDate").html("Chọn ngày tập trung sau ngày hiện tại là 7 ngày");
            return false;
        }
        $("#tbDate").html("*");
        return true;
    }
    $("#dateTT").blur(checkValidNTT);
    
    function checkValidSDT() {
        var reg = /^0\d{3}-\d{3}-\d{3}$/;
        if($("#idSDT").val()==""){
            $("#tbSDT").html("Vui lòng nhập dữ liệu");
            return false;
        }
        if(!reg.test($("#idSDT").val())){
            $("#tbSDT").html("Vui lòng nhập dữ liệu theo định dạn 0xxx-xxx-xxx");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#idSDT").blur(checkValidSDT);
    
    $("#btnSave").click(function () {
        if(checkValidName()==true && checkValidNumberAo() == true && checkValidNTT == true && checkValidSDT == true){
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#name").val() + "</th>";
            row += "<th>" + $("#numberAo").val() + "</th>";
            row += "<th>" + $("#dateTT").val() + "</th>";
            row += "<th>" + $("#doiTuyen").val() + "</th>";
            row += "<th>" + $("#idSDT").val() + "</th>";
            row += "<th>" + $("#avatar").val() + "</th>";
            $("#tableMember").append(row);
            $("#myModal").modal("hide");
        }
    });
});