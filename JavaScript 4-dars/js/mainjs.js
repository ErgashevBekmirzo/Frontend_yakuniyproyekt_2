let user = [
    {
        id: "00001",
        login: "Bekmirzo",
        password: "Bekmirzo",
        userName: "Ergashev Bekmirzo"
    }
]
let payArrey = [];

$("#editBtn").click(function (){
    let id = $(this).attr("id");
    payArray.forEach(function (item,i) {
        if (id == item.id){
            payArray[i].payUser = $('#payEditUser').val();
            payArray[i].payUserId = $('#payEditUserId').val();
            payArray[i].payOrder = $('#payEditOrder').val();
            payArray[i].paySum = $('#payEditSum').val();
            payArray[i].payTarget = $('#payEditTarget').val();
            payArray[i].payType = $('#payEditType').val();
            payArray[i].payDate = $('#payEditDate').val();
        }
    })
})

function edit(id){
    payArray.forEach(function (item) {
        if (id == item.id){
            $('#payEditUser').val(item.payUser);
            $('#payEditUserId').val(item.payUserId);
            $('#payEditOrder').val(item.payOrder);
            $('#payEditSum').val(item.paySum);
            $('#payEditTarget').val(item.payTarget);
            $('#payEditType').val(item.payType);
            $('#payEditDate').val(item.payDate);
        }
    });
}


function remove(id){
    payArrey.forEach(function (a,b){
        if (id == a.id){
            payArrey.splice(b,1);
        }
    });
    draw();
}
function draw(){
    let list = '';
    payArrey.forEach(function (item){
        list += '<tr>' +
            '<td>' + item.id + '</td>' +
            '<td>' + item.payUser + '</td>' +
            '<td>' + item.paySum + '</td>' +
            '<td>' + item.payOrder + '</td>' +
            '<td>' +
            '<span class="badge badge-success">' + item.payTarget + '</span>' +
            '</td>' +
            '<td>' + item.payType + '</td>' +
            '<td>' + item.payDate + '</td>' +
            '<td>' +
            '<button type="button" class="btn btn-primary mr-1" data-toggle="modal" data-target="#editModal" onclick="edit(' + item.id + ')">Edit</button>' +
            '<button type="button" class="btn btn-danger" onclick="remove(' + item.id + ')">Remove</button>' +
            '</td>' +
            '</tr>'
        ;
    });
    $("#tbody").html(list);
}

$(document).ready(function (){
    let kirishSoni = 0;
    let payID = 0;
    let kassirId = '';
    $('#startModal').modal("show");
    $('#startBtn').click(function (){
        let login = $("#login").val();
        let password = $("#password").val();
        if (login !="" && password !=""){
            let topildi = false;
            user.forEach(function (item){
                if (login == item.login){
                    if (password == item.password){
                        $("#workingBlock").toggleClass("d-none");
                        $("#kassir").html(item.userName);
                        $("#startModal").modal("hide");
                        topildi = true;
                        kassirId = item.id;
                    }
                }
            });
            if (!topildi){
                if (kirishSoni >= 2){
                    $("startModal").modal("hide");
                    alert("tizim blocklandi!")
                }
                alert("Loginin xato bratwka");
                kirishSoni++;
            }
        }
        else {
            alert("Login yoki parol xato yozildi, iltimos qayta urunib ko'ring!");
        }
    });
    $("#addPay").click(function (){

        let payUser = $("#payUser").val();
        let payUserId = $("#payUserId").val();
        let payOrder = $("#payOrder").val();
        let paySum = $("#paySum").val();
        let payTarget = $("#payTarget").val();
        let payType = $("#payType").val();
        let payDate = $("#payDate").val();
        payID++;

        payArrey.push(
            {
                id: payID,
                userId: kassirId,
                payUser: payUser,
                payUserId: payUserId,
                payOrder: payOrder,
                paySum: paySum,
                payTarget: payTarget,
                payType: payType,
                payDate:payDate
            }
        );
        draw();
    });
});