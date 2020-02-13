$(function() {
	
	function msg_alert(title, msg, type){


		new PNotify({
			title: title,
			text: msg,
			type: type,
			before_open: function() {
				$("#send_email")[0].reset();
			}
		});
	};
	
	
	
    $("#send_email").submit(function( event ) {
	  
		
	  
		Email.send({
			SecureToken : "d36f6f82-68ce-429c-add1-52148f10bd5c",
			To :      ['info@izzy.fashion','ajem70@gmail.com'],
			From :    'izzysendmails@gmail.com',
			Subject : 'Formulário enviar mensagem - ' + $("#name").val(),
			Body :     $("#email").val() + " - Enviou a seguinte mensagem: " + $("#message").val()
		}).then(
			message => message == "OK" ? msg_alert("Izzy", "Obrigado pelo seu contacto", "success") : msg_alert("Izzy", message, "error")
		);
	  
		event.preventDefault();
		
	});	
		
	
	
});