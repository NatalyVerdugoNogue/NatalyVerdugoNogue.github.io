window.email = {};

window.email.emailajs = () => {
  const serviceid = 'gmail';
  const templateid = 'contactportfolio';

  const name = document.getElementById('fromname').value;
  const email = document.getElementById('fromemail').value;
  const mess = document.getElementById('message').value;
  const subj = document.getElementById('subject').value;

  if (name === '') {
    alert('Por favor ingrese un nombre');
  } else if (email === '') {
    alert('Por favor ingrese un email para poder contactarte');
  } else {
    const templateparams = {
      fromname: name,
      fromemail: email,
      message: mess,
      subject: subj
    };
    document.getElementById('container').style.cursor = 'wait';
    document.getElementById('btnform').style.cursor = 'wait';
    return new Promise(() => {
      emailjs.send(serviceid, templateid, templateparams)
        .then(() => {
          alert('Su mensaje se envió correctamente a Nataly');
          document.getElementById('fromname').value = '';
          document.getElementById('fromemail').value = '';
          document.getElementById('message').value = '';
          document.getElementById('subject').value = '';
          document.getElementById('container').style.cursor = 'default';
          document.getElementById('btnform').style.cursor = 'default';
        }, () => {
          alert('Su mensaje no fue enviado, inténtelo nuevamente por favor.');
        });
    });
  }
};