//限制开放题只填写数字
if(f('Q2x13_3_other').toBoolean())
{
  var re = /^\+?[1-9][0-9]*$/;
  if( !re.test(f('Q3x13_3_other').get()))
  {
    RaiseError();
    SetErrorMessage(CurrentLang(),"请输入数字");
  }
}


//开放题只允许填数字，并且可保留一位小数
var re = /^(\d+\.\d{1,1}|\d+)$/;
if( !re.test(f('Q3x9_5_other').get()))
{
  RaiseError();
  SetErrorMessage(CurrentLang(),"请输入数字，且最多保留一位小数");
}


//只可填写数字，填写其他内容无效
$("input").keypress(function (e){
  var charCode = (e.which) ? e.which : e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
});
