/*
Globalģ��Mode:
1.Live
2.Test
3.Client
4.QA
5.SP
6.QuestTest

deviceCategory:
1.PC or equivalent
2.Tablet (>=7 inch)
3.Smartphone or equivalent (<7 inch)
4.Other small devices



Demo Link:
https://online.ssisurveys.com/wix/3/p1019653.aspx

//����2017Wave3��
Copy of FS ORD-277311-Q2L7 2017 Lycra project wave3-IPSOS*Li... (p3175466)

//Globalģ��: 
INTERNAL - SSI Global Template 2017 v3.3 (p1010478)

//�ʺϹ���ʹ�õ�Globalģ��
2018 Latest new template (p3264119) 

//�����о��ã�
Confirmit_Document_Summer (p2368138)

//2018 ����� ������Ŀ  ʹ�ü򻯺��ʺ��й��õ�Globalģ�壺
FS ORD-329252-W2X6 Western food study�����*Test* (p3145202)

���Ե�¼������ !@#Yxxgyl130330g


//��ϵͳ Demo Link
INTERNAL - [PRODUCTION] Demo for jQuery tools - v3.3 (p1509406)
//�������ӣ�
https://online.ssisurveys.com/wix/p1509406.aspx?pw=wevl5IW2


 //IPSOS lOGO
 /isa/PYAMLMFAKKOYIBEYNHKRJRBIMIEALXOH/IPSOS/IPSOSLOGO.jpg


//��ϵͳģ��
p1396106  �ƶ�ģ��
p1399534 �����ģ��

//����Code
var form = f('SQ7A');
var precodes = form.domainValues();
for(var i = 0; i < precodes.length; i++) {
  var code = precodes[i];
}

//����
if() {
  RaiseError();
  ClearErrorMessage();
  SetErrorMessage(CurrentLang(),"");
}

//JDP Copy right
? 2017 J.D. Power Commercial Consulting (Shanghai) Co. Ltd. All Rights Reserved.

//�滻ͼƬ��������
//d2n88fe5uqdqty.cloudfront.net/ssicn/2018/ORD-319183-G6Y3/CAD.mp4

//ѹ����Ƶ

���ߣ���ʽ����
������ã�AVC�������ʹ�С����С���� 10MB


//��ʾ�����
//�����⣬��ʽ����
�϶��������������ƶ���ť�������
����˵�������ѡ����������ٴε��ȡ������
<style>
.questionarea tr,.questionarea tr:last-child{border:none !important;}
td.answerlabel{width:auto;}
td.input{margin-left:0px !important;display:inline !important;}
</style>

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���ļ���

//JQUERY LINK
 //d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/jquery-1.10.1.min.js

 //ioniconsͼ���
 http://ionicons.com/
 //����ioniconsͼ��ʱ���赼��ionicons��CSS���ļ�
 //d2n88fe5uqdqty.cloudfront.net/rnd/plugins/ionicons/ionicons-2.0.1/css/ionicons.min.css

 //����Bootstrap���
 <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap /3.3.1/css/bootstrap.min.css"/>

//����Font Awesomeͼ���
<link rel =��stylesheet��href =��// maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css��/>

//Animate CSS��
//���ļ�λ��C:\Users\summer_guan\Desktop\Confirmit\animate.css

//sublimeText AppData·��
C:\Users\summer_guan\AppData\Roaming\Sublime Text 3\Packages\User
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
һЩ������ѧ����֪ʶ�����ʱ���ܻ��õ����뵽�����д�����û��һ����˳��
����:
������prime number���ֳ������������޸���
��������Ϊ�ڴ���1����Ȼ���У�����1�����������ⲻ��������������

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
����ĳ��÷�����

delete:ɾ������Ԫ��

var a = new Array(1, 2, 3, 4);
delete a[2];
console.log(a[2]) // undefined
������ֱ�Ӱ�a[2]��ֵΪundefined���ƣ�����ı����鳤�ȣ�Ҳ����ı��������ݵ�index��value��Ӧ��ϵ
//////////////////////////////////////////////////////////////////////////////////////////////////
ջ����
pop��push�ܹ�������ʹ�ö�ջ����������ʹ������
var a=new Array(1,2,3);
            a.push(4);
            console.log(a);//[1, 2, 3, 4] 
            console.log(a.length);//4
            console.log(a.pop(a));//4
            console.log(a); //[1, 2, 3] 
            console.log(a.length);//3

���з��� �����ȳ�
var a=new Array(1,2,3);
            a.unshift(4);
            console.log(a);//[4, 1, 2, 3] 
            console.log(a.length);//4
            console.log(a.shift(a));//4
            console.log(a); //[1, 2, 3] 
            console.log(a.length);//3
////////////////////////////////////////////////////////////////////////////////////////////////////////
splice()����
splice() ������/�����������/ɾ����Ŀ��Ȼ�󷵻ر�ɾ������Ŀ���÷�����ı�ԭʼ����

splice(index, howmany, item1, ..., itemN)
index�� ���衣�������涨���/ɾ����Ŀ��λ�ã�ʹ�ø����ɴ������β���涨λ�á�
howmany�� ���衣Ҫɾ������Ŀ�������������Ϊ 0���򲻻�ɾ����Ŀ��
item1, ..., itemN��  ��ѡ����������ӵ�����Ŀ��
////////////////////////////////////////////////////////////////////////////////////////////////////////
join()����
������Ԫ�أ����������toString()������ʹ�ò�����Ϊ���ӷ����ӳ�һ�ַ���
var a=new Array(1,2,3,4,5);
       console.log(a.join(',')); //1,2,3,4,5 
       console.log(a.join(' ')); //1 2 3 4 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////
slice(start,end)����
�������ڷ���������һ��Ƭ�λ������飬���ֻдһ���������ز���������������֣�����������ָ������������β������
��-3��˼�����鵹��������һ���˲�����ô�ɣ������ڲ�֪�����鳤�ȣ���������n����ʱ����Щ�ã��������鳤�Ⱥܺ�֪�������������þ�����÷�����
���start����end���ؿ����飬ֵ��ע���һ����slice����ı�ԭ���飬���Ƿ���һ���µ����顣
var a=new Array(1,2,3,4,5);
            console.log(a); //[1, 2, 3, 4, 5] 
            console.log(a.slice(1,2));//2
            console.log(a.slice(1,-1));//[2, 3, 4] 
            console.log(a.slice(3,2));//[]
            console.log(a); //[1, 2, 3, 4, 5]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
concat(array)
���������Ǽ��У�������治�������֣�concat��������ƴ�����飬a.concat(b)����һ��a��b��ͬ��ɵ������飬ͬ�������޸��κ�һ��ԭʼ���飬Ҳ����ݹ����������ڲ�����
var a=new Array(1,2,3,4,5);
            var b=new Array(6,7,8,9);
            console.log(a.concat(b));//[1, 2, 3, 4, 5, 6, 7, 8, 9] 
            console.log(a); //[1, 2, 3, 4, 5] 
            console.log(b); //[6, 7, 8, 9]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
reverse()
�������ڽ�����������֮ǰ��ͬ���������޸�ԭ����


var a=new Array(1,2,3,4,5);
            a.reverse();
            console.log(a); //[5, 4, 3, 2, 1]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
sort
sort�������ڶ�����������򣬵�û�в�����ʱ��ᰴ��ĸ�����������������undefined�ᱻ�ŵ�����棬����Ԫ����������toString������
����밴���Լ����巽ʽ���򣬿��Դ�һ�����򷽷���ȥ���ܵ��͵Ĳ���ģʽ��ͬ��sort��ı�ԭ���顣
var a=new Array(5,4,3,2,1);
       a.sort();
       console.log(a);//[1, 2, 3, 4, 5]
����������������


var a=new Array(7,8,9,10,11);
       a.sort();
       console.log(a);//[10, 11, 7, 8, 9]
��Ϊ������ĸ������7�ͱ�10���ˣ���ʱ��������Ҫ�����Զ���������
var a=new Array(7,8,9,10,11);
           a.sort(function(v1,v2){
            return v1-v2;
           });
       console.log(a);//[7, 8, 9, 10, 11]
sort�ڲ�ʹ�ÿ�������ÿ�αȽ�����Ԫ�ش�С��ʱ�����û�в�������ֱ���ж���ĸ������в�����
������ڱȽϵ��������������Զ��巽�������ã����ڱȽϵ��������ᴫ���Զ��巽����v1��v2����
�������ֵ����0��ʾv1>v2���������0����ʾv1=v2�����С��0����ʾv1<v2��
��ʵ���Ǵ���ķ������Ǹ���sort��ô�Ƚ�����Ԫ��˭��˭С�����������ƶ�Ԫ�ع����˼�д���ˡ�    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
js����ѭ����������������Ԫ�صķ���

��js�����������򵥵İ취����ʹ��forȻ��������arr.length������Ϊfor����޶�ֵ���ɽ���ˣ���������������һЩ���õ�ʵ����



for(){}��������

<script type="text/javascript">
 <!--
var arr = new Array(13.5,3,4,5,6);
for(var i=0;i<arr.length;i++){
 arr[i] = arr[i]/2.0;
}
alert(arr);
 //-->
 </script>

for inѭ����������


<html>
<body>
<script type="text/javascript">
var x
var mycars = new Array()
mycars[0] = "Saab"
mycars[1] = "Volvo"
mycars[2] = "BMW"
for (x in mycars)
{
document.write(mycars[x] + "<br />")
}
</script>
</body>
</html>
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
js�������ַ������໥ת������

1������ת�ַ���
��Ҫ������Ԫ����ĳ���ַ����ӳ��ַ�����ʾ���������£�

var a, b;
a = new Array(0,1,2,3,4);
b = a.join("-");

2���ַ���ת����

ʵ�ַ���Ϊ���ַ�����ĳ���ַ��и�����ɸ��ַ���������������ʽ���أ�ʾ���������£�


var s = "abc,abcd,aaa";
ss = s.split(",");// ��ÿ������(,)�����зֽ⡣   
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��ť����ʱ
<center><div id="fbshow"></div></center>
$(function(){
  var count=15;
  var countdown=setInterval(function(){
    $("#forwardbutton").attr("disabled",true);
    $("#forwardbutton").hide();
    $("#fbshow").html("��һ����ť����"+count+"������");
    count--;
    if (count == -1 )
    {
      clearInterval(countdown);
      $("#forwardbutton").attr("disabled",false);
      $("#fbshow").html("");
      $("#forwardbutton").show();
    }
  },1000);

});

//ֱ���ڰ�ťλ������ʾ����ʱ������Global Template
countdown(20);
function countdown(val){
$('#forwardbutton').hide();
  $('<div id="count" style="color:red;font-size:20px;display:inline-block;position:relative;bottom:30px;float:right"></div>').appendTo($('.nav'));
$('#count').html(val);
var timer=null;
timer=setInterval(function(){  
   val--;
  $('#count').html(val);
   if(val<1){
     $('#count').remove();
     $('#forwardbutton').show();
     clearInterval(timer);
   }  
},1000);

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�����ⰴ˳����д
function SetItemFun() {
  var theobj;
  var queID;
  for(var i=1;i<row;i++){
    if(document.getElementById(sQidStr+i).value.length > 0){
      document.getElementById(sQidStr+(i+1)).disabled=false;
    }else{
      for(var j=i+1;j<=row;j++){
        document.getElementById(sQidStr+j).value="";
        document.getElementById(sQidStr+j).disabled=true;
      }
    }
  }
  setTimeout(SetItemFun,100);
}
SetItemFun();
var sQidStr = "A1B_";
var row = 10;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�����ⰴ˳����д,jQuery:
//var formID = $("fieldset:eq(0)").attr("id").replace("fieldset_","");
//:gt(index)  ƥ�����д��ڸ�������ֵ��Ԫ��
var formID = $("fieldset:eq(0)").attr("id");
var arr = $('#'+ formID +' input');
arr.attr('disabled', true);
arr.eq(0).attr('disabled', false);
arr.keyup(function() {
  var pos = arr.index($(this));
  if ($(this).val()!="") {
    arr.eq(pos+1).("disabled", false);
  } else {
    $('#' + formID +' input:gt('+pos+')').prop("disabled",true).val("");
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�����ȡcode
var fromForm = f("");
var toForm = f("");
const numberOfItems : int = 3;

var available = new Set();
available = available.union(fromForm);
var selected = new Set();
if(available.size() <= numberOfItems)
{
  selected = available;
}
else
{
  while(selected.size() < numberOfItems)
   {
    var codes = available.members();
    var randomNumber : float = Math.random()*codes.length;
    var randomIndex : int = Math.floor(randomNumber);
    var selectedCode = codes[randomIndex];
    available.remove(selectedCode);
    selected.add(selectedCode);
   }
}

toForm.set(selected);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���Ϊ���⸳ֵ
var form = f("part");
if(!form.toBoolean())
{
  var codes = form.domainValues();
  var randomNumber  = Math.random()*codes.length;
  var randomIndex = Math.floor(randomNumber);
  var code = codes[randomIndex];
  form.set(code);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�����ͣ��ʾ�ı��������
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��������ѡ��򻥳�
$(document).ready(function(){
  var str1="A2"
  var str2="A2None_97"

//������������ı����Ҫ��գ�����focus, ����ı�����Ҫ���룬����keydown
$("#"+str1).focus(function(){

 $("#"+str2).attr("checked",false);
});
$("#"+str2).change(function(){

 $("#"+str1).attr("value","");
});

});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��մ�
function ClearForm(form)
{
  if(form.COMPOUND) //form with multiple items
  {
    var fcodes = form.domainValues(); //all precodes in form
    for(var i : int = 0;i<fcodes.length;i++) //iterate through precode
    {
       form[fcodes[i]].set(null); //clear item
     }
   }
  else //form with one item
  {
    form.set(null);
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���ƿ�����ֻ��д���� ������������
if(f('Q2x13_3_other').toBoolean())
{
  var re = /^\+?[1-9][0-9]*$/;
  if( !re.test(f('Q3x13_3_other').get()))
  {
    RaiseError();
    SetErrorMessage(CurrentLang(),"����������");
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���ƿ����ⲻ����ո�
function validateOpen(qid)
{
  var tt=qid.toString();
  var TT=tt.Trim();
  if(TT=="")
  {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), "��ע�⣬���ⲻ����Ϊ�գ�������Ӧ��Ŀ��������Ӧ�𰸡�");
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���ƿ�����ֻ���
var re = /^[\u4e00-\u9fa5]{0,}$/;
if( !re.test(f('Q12x1a').get()))
{
  RaiseError();
  SetErrorMessage(CurrentLang(),"����д����Ʒ��");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���ƿ�������֣����Դ�����
var re = /^[\u4e00-\u9fa5\,\��]+$/;
for(var i=1;i<=3;i++){
  if(f('Q20a')[i].toBoolean())
  {
    if( !re.test(f('Q20a')[i].get()))
    {
      RaiseError();
      SetErrorMessage(CurrentLang(),"����д����");
    }

  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��ת����
Radirect("Client link?&r="+f('ID').get()+"&s="+f('SID').get());
//����
Radirect("Client link?&r="+CurrentID()+"&s="+CurrentSID());
//�����ͻ�������
http://confirmit.ssisurveys.com/wix/p62756264.aspx?r=x&s=xxxxxxxx&__qid=C3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���ؽ���������
#progressbarscale td{display:none;visibility:hidden;}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���������ѡ�򻥳�
$(function(){
 $("#Q14None_2").click(function(){
   $("#Q14_1").val("");

 })
})

$(function(){
 $("#Q14_1").focus(function(){
  $("#Q14None_2").attr("checked",false);
})

})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���3D Grid������
//Check 3D Grid Open Text
//QID--3dgrid name
//m--3dgrid other code array
//n--3dgrid internal question count
//demo-check3DOther("q56",[3,4],2)
function check3DOther(QID:String,m:String,n:int)
{
  var arr=new Array();
  var storage1=new Array();
  var storage2=new Array();
  var flag=new Array();
  arr=m.split(",");
  var temp1;
  var temp2;
  for(var t=0;t<arr.length;t++)
  {
    temp1=0;
    temp2=0;
    
    var str=QID+"_"+arr(t)+"_other";

    if(f(str).toBoolean())
    {
      for(var i=0;i<n;i++)
      {
        if(f(QID+"x"+(i+1)).any(arr(t)))
        {
          temp1++;
        }
      }
    }else
    {
      for(var j=0;j<n;j++)
      {
        if(f(QID+"x"+(j+1)).any(arr(t)))
        {
          temp2++;
        }
      }
    }
    if(f(str).toBoolean()|| temp2>0)
    {
      flag(t)=1;
    }
    storage1(t)=temp1;
    storage2(t)=temp2;
  }
  for(var s=0;s<storage1.length;s++)
  {
   if(flag(s)==1)
   {
    if(storage1(s)==0){
      RaiseError();
      SetQuestionErrorMessage(CurrentLang(),"��Ϊ������ע��ѡ����Ӧ��ѡ�");
    }
    if(storage2(s)>0){
      RaiseError();
      SetQuestionErrorMessage(CurrentLang(),"����ע��������д��Ӧ�����ݡ�");
    }
  }
}

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ֻ����������
var re = /^\+?[1-9][0-9]*$/;
if( !re.test(f('Q3x13_3_other').get()))
{
  RaiseError();
  SetErrorMessage(CurrentLang(),"����������");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//������ֻ���������֣����ҿɱ���һλС��
var re = /^(\d+\.\d{1,1}|\d+)$/;
if( !re.test(f('Q3x9_5_other').get()))
{
  RaiseError();
  SetErrorMessage(CurrentLang(),"���������֣�����ౣ��һλС��");
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���Grid����Ƿ�ȫ��һ��
function checkGrid(fForm){
  var precodes=fForm.domainValues();
  var temp:int=0;

  for(var i:int=0;i<precodes.length;i++){
    var code0=precodes[0];
    var codes=precodes[i];
    if(fForm[codes].get()==fForm[code0].get())
      { temp++; }
  }

  if(temp==precodes.length && precodes.length>1){
    RaiseError();
    ClearErrorMessage();
    SetQuestionErrorMessage(CurrentLang(),"����Ϊÿ��ѡ��ѡ����ͬ�Ĵ𰸡�");
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��ȡcode

ClearForm(f('category3'));

var cat :String = f('random3').get();
var arr = cat.split(",");

for(var i=1;i<=arr.length;i++)
{
  f('category3')[i].set(arr[i-1])
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��ȡlabel  ��Ҫֱ����categoryLabels()  Label�п��ܻ��ж���

ClearForm(f('BC2Label'));

var cat :String = f('BC2Hidden').get();
var arr = cat.split(",");

for(var i=1;i<=arr.length;i++)
{
  f('BC2Label')[i].set(f('BC2Hidden')[arr[i-1]].label());
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid ������ѡ����ͬ��
function checkSpeGrid(fForm){
  var precodes=fForm.domainValues();
  var temp1:int=0;
  var temp2:int=0;

  for(var i:int=0;i<precodes.length;i++){
    var codes=precodes[i];
    if(fForm[codes].any('1'))
    {
      temp1++;
    }
    if(fForm[codes].any('2'))
    {
      temp2++;
    }

  }

  if((temp1==precodes.length ||temp2==precodes.length )&& precodes.length>1){
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(),"�������Ĵ𰸡�");
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid �뿪�� ������ע��������д�𰸲���ѡ�� Grid������ע��
$(".confirmit-grid").find("input[type=text]").parent().siblings().hide();
$(".confirmit-grid").find("input[type=text]").keyup(function() {
  if($(this).val().trim().length > 0) {
    $(this).parent().siblings().show(); 
  } else {
    $(this).parent().siblings().hide();
  }
  
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��ȡ���˳��A15Order��Open Text��
var cat :String = f('Rorder').domainValues();
var arr = cat.Split(",");

f('A15order_1').set(arr[0]);
f('A15order_2').set(arr[1]);
f('A15order_3').set(arr[2]);

//��Ŀ����ɲ��֣�
//<span style="color:red">��3���֣����ǵ�^f('A15order')['1'].get()=='1'?"1":f('A15order')['2'].get()=='1'?"2":f('A15order')['3'].get()=='1'?"3":""^����</span><br />
//<span style="color:red">��3���֣����ǵ�^f('A15order')['1'].get()=='2'?"1":f('A15order')['2'].get()=='2'?"2":f('A15order')['3'].get()=='2'?"3":""^����</span><br />
//<span style="color:red">��3���֣����ǵ�^f('A15order')['1'].get()=='3'?"1":f('A15order')['2'].get()=='3'?"2":f('A15order')['3'].get()=='3'?"3":""^����</span><br />

//����Ӷ���������� �����ʾ3����  ������ʾ��ʾ��Ϣ����ʾ����ǵڼ�����ʾ�ģ�

//���� ��ȡ��Ҫ��ʾ�����Ĳ���
ClearForm(f('getThree'));
if(f('Qbrand').any('1','6')) {f('getThree')['1'].set('1')}
  if(f('Qbrand').any('2','7')) {f('getThree')['2'].set('1')}
    if(f('Qbrand').any('3','8')) {f('getThree')['3'].set('1')}
      if(f('Qbrand').any('4','9')) {f('getThree')['4'].set('1')}
        if(f('Qbrand').any('5','10')) {f('getThree')['5'].set('1')}

//Ȼ�� ��ȡ���˳��
var cat :String = f('getThree').get(); 
var arr = cat.Split(",");

f('mainOrder_1').set(arr[0]);
f('mainOrder_2').set(arr[1]);
f('mainOrder_3').set(arr[2]);

//��� ��ʾ��ʾ��Ϣ
//<span style="color:red">^f('mainOrder')['1'].get()=='1'?"Now, you are going to see a total of 3 product ranges with 2 names per range over the next few screens, for each product range, we would like to understand your perceptions and thoughts for the names. Let��s start with the first product range.":f('mainOrder')['2'].get()=='1'?"Now we are onto the second product range! You will see another 2 names. Please let us know your thoughts over the next few screens.":f('mainOrder')['3'].get()=='1'?"Now we are onto the final product range. Please let us know your thoughts over the next few screens. We��re almost there!":""^</span>

//<span style="color:red">^f('mainOrder')['1'].get()=='2'?"Now, you are going to see a total of 3 product ranges with 2 names per range over the next few screens, for each product range, we would like to understand your perceptions and thoughts for the names. Let��s start with the first product range.":f('mainOrder')['2'].get()=='2'?"Now we are onto the second product range! You will see another 2 names. Please let us know your thoughts over the next few screens.":f('mainOrder')['3'].get()=='2'?"Now we are onto the final product range. Please let us know your thoughts over the next few screens. We��re almost there!":""^</span>

//<span style="color:red">^f('mainOrder')['1'].get()=='3'?"Now, you are going to see a total of 3 product ranges with 2 names per range over the next few screens, for each product range, we would like to understand your perceptions and thoughts for the names. Let��s start with the first product range.":f('mainOrder')['2'].get()=='3'?"Now we are onto the second product range! You will see another 2 names. Please let us know your thoughts over the next few screens. ":f('mainOrder')['3'].get()=='3'?"Now we are onto the final product range. Please let us know your thoughts over the next few screens. We��re almost there!":""^</span>

//<span style="color:red">^f('mainOrder')['1'].get()=='4'?"Now, you are going to see a total of 3 product ranges with 2 names per range over the next few screens, for each product range, we would like to understand your perceptions and thoughts for the names. Let��s start with the first product range.":f('mainOrder')['2'].get()=='4'?"Now we are onto the second product range! You will see another 2 names. Please let us know your thoughts over the next few screens. ":f('mainOrder')['3'].get()=='4'?"Now we are onto the final product range. Please let us know your thoughts over the next few screens. We��re almost there!":""^</span>

//<span style="color:red">^f('mainOrder')['1'].get()=='5'?"Now, you are going to see a total of 3 product ranges with 2 names per range over the next few screens, for each product range, we would like to understand your perceptions and thoughts for the names. Let��s start with the first product range.":f('mainOrder')['2'].get()=='5'?"Now we are onto the second product range! You will see another 2 names. Please let us know your thoughts over the next few screens. ":f('mainOrder')['3'].get()=='5'?"Now we are onto the final product range. Please let us know your thoughts over the next few screens. We��re almost there!":""^</span>


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ϊ��������ٵ�Quota��ֵ
//��ѡ��
f('Type').set(GetLeastFilledQuotaCodes('Type',1,f('QS6').get()).toString());
//��ѡ��
f("Type").set(new Array(GetLeastFilledQuotaCodes('Type', 5,f("QS6").get())));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�Ƴ���ѡ��ťѡ��״̬
$("#Q3_1_1").removeAttr("checked");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��ֵ�� ������ע��������д�𰸺󣬳�ʾ��ֵ��
if($('#Q4x12_7_other').val().trim().length>0){
  $('#Q4x12_7').show();
}else{
  $('#Q4x12_7').hide().val('');
}

$('#Q4x12_7_other').on("keyup",function(){
  if($(this).val().trim().length>0){
    $('#Q4x12_7').show();
  }else{
    $('#Q4x12_7').hide().val('');
  }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���ͼƬ�Ŵ�
/*
<script type="text/javascript" src="https://d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/testTW/highslide.js"></script>
<link rel="stylesheet" type="text/css" href="https://d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/testTW/highslide.css" />
<script type="text/javascript">
hs.graphicsDir = 'https://d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/testTW/highslide/graphics/';
hs.wrapperClassName = 'borderless';
hs.showCredits = false;
</script>
<span><font size="3">���ͼƬ�ɷŴ�</font></span>

<a href="//d2n88fe5uqdqty.cloudfront.net/ssicn/2016/ORD-221916-R6H6/Style1.jpg"  width="400" class="highslide" onclick="return hs.expand(this)"><img src="//d2n88fe5uqdqty.cloudfront.net/ssicn/2016/ORD-221916-R6H6/Style1.jpg" width="200"  /></a>
<a href="//d2n88fe5uqdqty.cloudfront.net/ssicn/2016/ORD-221916-R6H6/Style2.jpg"  width="400" class="highslide" onclick="return hs.expand(this)"><img src="//d2n88fe5uqdqty.cloudfront.net/ssicn/2016/ORD-221916-R6H6/Style2.jpg" width="200"  /></a>
<a href="//d2n88fe5uqdqty.cloudfront.net/ssicn/2016/ORD-221916-R6H6/Style3.jpg"  width="400" class="highslide" onclick="return hs.expand(this)"><img src="//d2n88fe5uqdqty.cloudfront.net/ssicn/2016/ORD-221916-R6H6/Style3.jpg" width="200"  /></a>
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid   ������Grid+Open Text List  Open��Grid��ѡ����ʱ��ų�ʾ,δ����
$(document).ready(function(){
  function showopen(curclass,col)
  {
    $(curclass).find('input[type="text"]').hide();

    $(curclass).find('tr').each(function(){
      var trthat=$(this);
      trthat.find('td').each(function(j){
        var tdthat=$(this);

        tdthat.find('input[type="radio"]').each(function(){

          if($(this).is(":checked")&&j==col)
          {
            $(this).parent().next().find('input[type="text"]').show();
          }else
          {
            $(this).parent().parent().find('input[type="text"]').hide();
            $(this).parent().next().find('input[type="text"]').val("");
          }

        });

      });

    });
  }
  showopen(".answers",8);
  $('.answers').find('input[type="radio"]').click(function(){
    showopen(".answers",8);
  });
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//����Array
var a = new Array('2','6','7','8','9','11');

for(var i=0;i<a.length;i++)
{
  var code = a[i];
  for(var j=1;j<=10;j++)
  {
    if(f('Q2x3b_'+j)==code)
    {
      f('QBrand')[code].set('1');
    }
  }
  
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid �뿪���� ���ذ�ť ��д���ʾ,δ����
$(document).ready(function(){
  function OpenText(str)
  {
    $(str).parent().parent().find('td').each(function(i){
      if(i>0){
        $(this).find('input').hide();
      }
    });
    
    var that=$(str);
    var len=that.val().length;

    that.parent().next().find('input').each(function(){

      if(len>0){

       $(this).show();
       $(this).parent().next().find('input').show();

     }else
     {
      $(this).val('');
      $(this).hide();
    }
    
  });
  }
  
  
  OpenText(".othertextfield");
  
  $('.othertextfield').bind("keyup","keydown",function(){
    OpenText(".othertextfield");
  });
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��������д��Ʒ��Ȧ����ѡ����
for(var i=1;i<=10;i++){
  if(f('B2_'+i).get().indexOf("����")!=-1) {f('B3')['1'].set('1')}
  if(f('B2_'+i).get().toUpperCase().indexOf("BOSCH")!=-1) {f('B3')['1'].set('1')}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//δ����
//#inshow{width:800px;margin:10px auto;border:2px solid #ccc;background:#fff;border-radius:4px;box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5),inset 0px 1px 0px 0px rgba(250, 250, 250, 0.5);text-align:center;vertical-align:middle;}
//#soushow{min-width:200px;margin:10px auto;border:2px solid #eb4f38;background:#fff;border-radius:10px;box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5),inset 0px 1px 0px 0px rgba(250, 250, 250, 0.5);text-align:center;}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//AnswerOrder
var ordered = AnswerOrder("cars");
for(var i=0;i<ordered.length;i++)
{
  f("rank"+(i+1)).set(ordered[i]);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid�� �����ͣ��ɫ
td.hover {background:orange;}

$(function(){
  $(".gridcell").mouseover(function(){
    $(this).parent().css("background","orange");
  }).mouseout(function(){
    $(this).parent().removeAttr("style");
  });

})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3DGrid �����ͣ��ɫ
$(document).ready(function(){
  var hover_index = 0;
  $("#fieldset_switch2ae table td").hover(function (){
    hover_index =  $(this).parent().find('td').index(this);
    $("#fieldset_switch2ae table tr").find("td:eq("+hover_index+")").addClass("hover");
  },function(){
    $("#fieldset_switch2ae table tr").find("td:eq("+hover_index+")").removeClass("hover");
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////��ѡ
/**
 * @param arr ��ѡ����ѡ��ѡ���Ӧ��code����
 * @param chooseArr ����ѡ���ѡ���Ӧ��code����
 * @param removeArr ��Ҫ�ų���ѡ���Ӧ��code����
 * @param chooseCount ���ѡ�е�ѡ�����
 */
 function randomChoose(arr, chooseArr, removeArr, chooseCount) {
  var checkObj = {},
  unCheckObj = {},
  chooseCode = function(list, codes, count, remObj) {
    while (codes.length < count) {
      var index = Math.floor(Math.random() * list.length);
      if (!remObj[list[index] + '']) {
        codes.push(list[index]);
      }
      list.splice(index, 1);
    }
  },
  fillObj = function(list, obj) {
    if (list && list.length > 0) {
      for (var i = 0, len = list.length; i < len; i++) {
        obj[list[i] + ''] = 1;
      }
    }
  },
  removeCode = function(list, obj) {
    var result = [];
    if (list && list.length > 0) {
      for (var i = 0, len = list.length; i < len; i++) {
        if (!obj[list[i] + '']) {
          result.push(list[i]);
        }
      }
    }
    return result;
  };

  fillObj(chooseArr, checkObj);
  fillObj(removeArr, unCheckObj);

  if (arr.length > chooseCount) {
    var brr = [],
    crr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      if (checkObj[arr[i] + '']) {
        brr.push(arr[i]);
      } else {
        crr.push(arr[i]);
      }
    }

    if (brr.length > chooseCount) {
      arr = [];
      chooseCode(brr, arr, chooseCount, unCheckObj);
    } else {
      arr = brr;
      chooseCode(crr, arr, chooseCount, unCheckObj);
    }
  }

  return removeCode(arr, unCheckObj);
}

//��ѡ2
/*
@param codes ��ѡ����ѡ����ѡ��Code����
@param listOne ��һ����Ҫ��ѡ������
@param listTwo �ڶ�����Ҫ��ѡ������
@param preOne ��һ����ѡ�����б�ѡ��Code����
@param preTwo �ڶ�����ѡ�����б�ѡ��Code����
@param oneCount ��һ����ѡ�������ѡ�еĸ���
@param TwoCount �ڶ�����ѡ�������ѡ�еĸ���
*/
function randomChooseTwo(codes, listOne, listTwo, preOne, preTwo, oneCount, twoCount) 
{
  var checkObjOne = {},
  checkObjTwo = {},
  preObjeOne = {},
  preObjTwo = {},
  fillObj = function(list, obj) {
    if (list && list.length > 0) {
      for (var i = 0, len = list.length; i < len; i++) {
        obj[list[i] + ''] = 1;
      }
    }
  },
  choosePreObj = function(list, arr, obj, brr) {
    for (var i = 0, len = list.length; i < len; i++) {
      if (obj[list[i] + '']) {
        arr.push(list[i]);
      }
    }
    for(var i=0, len=brr.length; i<len; i++){
     removeCode(list, brr[i]);
   }
 },
 chooseObj = function(list, arr, count, obj) {
  while (arr.length < count) {
    var index = Math.floor(Math.random() * list.length);
    if (!obj[list[index] + '']) {
      arr.push(list[index]);
    }
    list.splice(index, 1);
  }
},
chooseObj2 = function (list, arr, count) {
 while (arr.length < count) {
  var index = Math.floor(Math.random() * list.length);
  if (!isContain(arr, list[index])) {
    arr.push(list[index]);
  }
  list.splice(index, 1);
}
},
isContain = function (arr, code){
 var flag = false;
 for(var i=0, len=arr.length; i<len; i++){
  if(parseInt(code, 10) === parseInt(arr[i], 10)){
   flag = true;
   break;
 }
}
return flag;
},
removeCode = function(arr, code) {
  for(var i=0, len=arr.length; i<len; i++){
    if(parseInt(code, 10) === parseInt(arr[i], 10)){
     arr.splice(i, 1);
     break;
   }
 }
},
codeOne = [],
codeTwo = [];

fillObj(listOne, checkObjOne);
fillObj(listTwo, checkObjTwo);
fillObj(preOne, preObjeOne);
fillObj(preTwo, preObjTwo);

var arr1 = [],
arr2 = [];
for (var i = 0, len = codes.length; i < len; i++) {
  if (checkObjOne[codes[i] + '']) {
    codeOne.push(codes[i]);
  } else if (checkObjTwo[codes[i] + '']) {
    codeTwo.push(codes[i]);
  }
}

if (codeOne.length > oneCount) {
        // codeOne���
        choosePreObj(codeOne, arr1, preObjeOne, preOne);
        chooseObj(codeOne, arr1, oneCount, preObjeOne);
        if (codeTwo.length > twoCount) {
            // condeTwo�����ѡ
            choosePreObj(codeTwo, arr2, preObjTwo, preTwo);
            chooseObj(codeTwo, arr2, twoCount, preObjTwo);
          } else {
            // codeOne�codeTwo
            if((codeOne.length + codeTwo.length) > twoCount){
             chooseObj(codeOne, codeTwo, twoCount, {});
           }else{
             for(var i=0, len=codeOne.length; i<len; i++){
              codeTwo.push(codeOne[i]);
            }
            chooseObj2(listTwo, codeTwo, twoCount);
          }
          arr2 = codeTwo;
        }
      } else {
        if (codeTwo.length > twoCount) {
            // codeTwo�����codeTwo�codeOne
            choosePreObj(codeTwo, arr2, preObjTwo, preTwo);
            chooseObj(codeTwo, arr2, twoCount, preObjTwo);
            if((codeOne.length + codeTwo.length) > oneCount){
             chooseObj(codeTwo, codeOne, oneCount, {});
           }else{
             for(var i=0, len=codeTwo.length; i<len; i++){
              codeOne.push(codeTwo[i]);
            }
            chooseObj2(listOne, codeOne, oneCount);
          }
          arr1 = codeOne;
        } else {
            // codeOne��codeTwoʣ�����
            chooseObj2(listOne, codeOne, codeOne.length);
            chooseObj2(listTwo, codeTwo, codeTwo.length);
            arr1 = codeOne;
            arr2 = codeTwo;
          }
        }
        for (var i = 0, len = arr2.length; i < len; i++) {
          arr1.push(arr2[i]);
        }
        return arr1;
      }

/////��Ŀ�е���
ClearForm(f('HidA2x1'));

var codes=f('A2x1').get();

f('HidA2x1').set(randomChooseTwo(codes, [1,2,3,4,5,6,7,8], [13,14,15,16,17,18], [6], [13], 4, 4));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JDP �����������ֲ��ø��ڻ������������
function totalGrid(qID,lastCode){
  var tempTop:int=0;
  var tempLow:int=90;
  var precodes=f(qID).domainValues();
  for(var i:int=0;i<precodes.length-1;i++){
    var code=precodes[i];
    if(f(qID)[code].toNumber()>tempTop){
      tempTop=f(qID)[code].toNumber();
    }
    if(f(qID)[code].toNumber()<tempLow){
      tempLow=f(qID)[code].toNumber();
    }
  }
  if(f(qID)[lastCode].toNumber()>tempTop || f(qID)[lastCode].toNumber()<tempLow){
    RaiseError();
    SetErrorMessage(CurrentLang(),"���������ۡ��ǶԸò���ÿ���������۵��ۺ������֣������Ϸ�ֵӦ������֮ǰ�����ĸ��������ֵ���Сֵ�����ֵ֮�䣬�����ٴ�ȷ���������ġ��������ۡ���ֵ��");
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Copy Multi
function CopyMulti(from,to)
{  var precodes = f(from).domainValues();
  for(var i : int = 0;i<precodes.length;i++)
  {
    var code = precodes[i];
    f(to)[code].set(f(from)[code].get());
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//checkNull 
function checkNull(arr:String[],index:int)
{
  var error:Boolean=false;
  var Qp=new Set();

  for(var i:int=0;i<arr.length;i++)
    { Qp=Qp.union(f(arr[i])); }
  if(Qp.size()==0 && !f('Cnl')[index].toBoolean())
    { error=true; }
  if(error)
  {
//    f('cnl')[index].set('1');
RaiseError();
//    SetErrorMessage(CurrentLang(), "��ȷ�����ĳ���δ���ֹ���ҳ��������������, �밴����һҳ[>>]����ťȷ�ϣ���������һҳ��");
SetErrorMessage(CurrentLang(), "������ĳ�δ���ִ����������������⣬�빴ѡ������������ޡ�����������һ��&nbsp;[>>]����������");
}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ͼƬ����Ӧ
//��html�������ͼƬ���������ͼƬ����Ӧ��Ļ��С�����ǿ�߹̶����������css���������
img { height: auto; width: auto\9; width:100%; } 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid��ѡ�������ʾ������5������ѡ����ͬ�ķ���
var form = f('BB');
var arr = form.domainValues();
var temp :int =0;
var scale :int =10 //��ֵ
var num :int = 6;//����������ͬ�ĸ���
for(var i=1;i<=scale;i++)
{
  for(var j=0;j<=arr.length-num;j++)
  {
    if(form[arr[j]]==i&&form[arr[j+1]]==i&&form[arr[j+2]]==i&&form[arr[j+3]]==i&&form[arr[j+4]]==i&&form[arr[j+5]]==i){temp = temp + 1} 
  }
}

if( temp > 0 ) 
{
  RaiseError();
  ClearErrorMessage();
  SetErrorMessage(CurrentLang(),"��ȷ�����Ĵ�");
}

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
  //������ �����ʾ����
  
  $(function(){
   $("font").eq(0).text("���빺���");
   $("font").eq(1).text("�ڶ��빺���");
   $("font").eq(2).text("�����빺���");
   $("font").eq(3).text("�����빺���");
   $("font").eq(4).text("�����빺���");
   $("font").eq(5).text("��빺���");
   
 })

  $(function(){
   $("font").eq(0).text("�����ε�Ʒ��");
   $("font").eq(1).text("�ڶ�����");
   $("font").eq(2).text("��������");
   $("font").eq(3).text("��������");
   $("font").eq(4).text("��������");

 })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
//Numeric��д�ٷֱȣ��Զ�����
<script type="text/javascript">
$(document).ready(function(){
  var str1="Q10_1";
  var str2="Q10_2";

  $("#"+str1).keydown(function(){
   var v1=$("#"+str1).val();
   $("#"+str2).val(100-v1);
 });
  $("#"+str1).keyup(function(){
    var v1=$("#"+str1).val();
    $("#"+str2).val(100-v1);
  });

  $("#"+str2).keydown(function(){
   var v2=$("#"+str2).val();
   $("#"+str1).val(100-v2);
 });
  $("#"+str2).keyup(function(){
    var v2=$("#"+str2).val();
    $("#"+str1).val(100-v2);
  });

});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�ж��豸����  �ο���Ŀ��FS ORD-270775-T8D9-Express study study-Bain*test* (p67024370)
//Script:

for(var i=1;i<9;i++)
{
  f('HidDevice')[i].set(null);
}

f('HidDevice')['1'].set(GetDeviceInfo().IsDesktop);
f('HidDevice')['2'].set(GetDeviceInfo().IsTouch);
f('HidDevice')['3'].set(GetDeviceInfo().IsTablet);
f('HidDevice')['4'].set(GetDeviceInfo().IsGeneric);
f('HidDevice')['5'].set(GetDeviceInfo().IsMobile);
f('HidDevice')['6'].set(GetDeviceInfo().ScreenResolution);
f('HidDevice')['7'].set(GetDeviceInfo().DeviceType);
f('HidDevice')['8'].set(GetDeviceInfo().DeviceType.toString());

//������
IsDesktop:  1
IsTouch:  2
IsTablet: 3
IsGeneric:  4
IsMobile: 5
ScreenResolution: 6
DeviceType: 7
DeviceType.toString():  8

//Script
if(f('HidDevice')['1'].toString()=='True'){f('Device').set('1');}
if(f('HidDevice')['3'].toString()=='True'){f('Device').set('2');}
if(f('HidDevice')['4'].toString()=='True'){f('Device').set('3');}
if(f('HidDevice')['5'].toString()=='True'){f('Device').set('4');}

//������
PC/Desktop  1
Tablet  2
Generic 3
Mobile  4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//JDP ������
$(document).ready(function(){
  function chunk(array, chunkSize) {
   var i, j, temparray = [], chunk = chunkSize;
   for (i = 0, j = array.length; i < j; i += chunk) {
    temparray.push(array.slice(i, i + chunk));
  }
  return temparray;
}

function getData(current, toSwitch) {
 var qidsIndex = _.indexOf(qids, current);
 var diffIndex = _.indexOf(diff, current);
 var wQidIdx = (qidsIndex + 1) * weight;
 var wDiffIdx = (diffIndex + 1) * weight;
 var wDiffAdd = wDiffIdx + ((diffIndex + 1) * diffWeight);

     //console.log([qidsIndex, current, wQidIdx.toFixed(2), wDiffAdd.toFixed(2)]);
     toSwitch = toSwitch || false;
     return !toSwitch ? wQidIdx.toFixed(2) : wDiffAdd.toFixed(2);
   }

   try{
     //var qids = ['Intro1', 'Intro2', 'S1', 'infoScreener2', 'S2', 'S3', 'S4a', 'S4b', 'S4c', 'InfoQ3', 'Q3', 'Q4', 'IntroQ5', 'Q5A', 'Q5B', 'Q5C', 'Q5D', 'Q5E', 'Q5F', 'Q5G', 'Q5H', 'Q5I', 'Q6', 'Q6a', 'infoQ6', 'i205', 'i126', 'i295', 'i213', 'i127', 'i296', 'Q6ax3', 'i128', 'i297', 'i229', 'i129', 'i298', 'i237', 'i118', 'i299', 'i245', 'i119', 'i300', 'i253', 'i120', 'i301', 'i261', 'i121', 'i302', 'i173', 'i122', 'i303', 'i181', 'i123', 'i304', 'i189', 'i124', 'i305', 'i197', 'i125', 'i306', 'i157', 'i114', 'i307', 'i165', 'i115', 'i308', 'i149', 'i116', 'i309', 'i269', 'i117', 'i310', 'i277', 'i112', 'i311', 'i285', 'i113', 'i312', 'i293', 'i111', 'i313', 'Q6ax20', 'i110', 'i314', 'i1122', 'i1124', 'i1126', 'i1105', 'i1107', 'i1115', 'i1093', 'i1095', 'i1098', 'i1081', 'i1083', 'i1086', 'i1066', 'i1068', 'i1153', 'i1074', 'i1053', 'i1055', 'i1059', 'i1040', 'i1042', 'i1046', 'i1025', 'i1027', 'i1033', 'Q6ax29', 'i1157', 'i1160', 'iQ6ax30', 'i30', 'i1176', 'iQ6ax31', 'i1186', 'i1188', 'iQ6ax32', 'i1208', 'i1210', 'iQ6ax33', 'i1197', 'i1199', 'iQ6ax34', 'i1230', 'i1232', 'iQ6ax35', 'i1219', 'i1221', 'Q7', 'Q8', 'Q9A', 'Q9B', 'Q10', 'Q11A', 'Q11B', 'Q11C', 'Q12', 'Q13A', 'Q13B', 'Q14A', 'Q14B', 'Q15', 'Q16', 'Q17A', 'Q17B', 'Q17C', 'Q17D', 'Q17E', 'Q17F', 'Q17G', 'Q17H', 'Q18', 'background', 'Q20', 'Q22', 'Q25', 'Q26', 'Q27', 'Q28', 'Q29', 'infoAppend', 'D26f', 'F22Af', 'A18Af', 'H22f', 'T16f1', 'T16f2', 'infoEdu', 'D38f','F20f', 'T10T13f', 'Q636f','i1154'];
     var qids = ['Intro1', 'Intro2', 'S1', 'infoScreener2', 'S2', 'S3', 'S4a', 'S4b', 'S4c', 'InfoQ3', 'Q3', 'Q4', 'IntroQ5', ^f('qrotate').domainLabels()^ , 'Q6', 'infombp','Q6a', 'infoQ6', ^f('qrandom').domainLabels()^ , 'Q7', 'Q8', 'Q9A', 'Q9B', 'Q10', 'Q11A', 'Q11B', 'Q11ca','Q11cb' ,'Q12', 'Q13A', 'Q13Ba','Q13Bb', 'Q14A', 'Q14B', 'Q15', 'Q16', 'Q17A', 'Q17B', 'Q17C', 'Q17D', 'Q17E', 'Q17F', 'Q17G', 'Q17H', 'Q18', 'background', 'Q20', 'Q22', 'Q25', 'Q26', 'Q27', 'Q28', 'Q29', 'infoAppend', 'D26f', 'F22Af', 'A18Af', 'H22f', 'T16f1', 'T16f2', 'infoEdu', 'D38f','F20f', 'T10T13f', 'Q636f'];    
     //var Q6Rc = _.range(1, 36, 1);
     var Q6Rc = [^f('qrandom').domainValues()^];
     Q6Rc = _.difference(Q6Rc, [^f('Q6Rc').get()^]);

     var Q6RcQids = {
      1 : ["i205", "i126", "i295"],
      2 : ["i213", "i127", "i296"],
      3 : ["Q6ax3", "i128", "i297"],
      4 : ["i229", "i129", "i298"],
      5 : ["i237", "i118", "i299"],
      6 : ["i245", "i119", "i300"],
      7 : ["i253", "i120", "i301"],
      8 : ["i261", "i121", "i302"],
      9 : ["i173", "i122", "i303"],
      10 : ["i181", "i123", "i304"],
      11 : ["i189", "i124", "i305"],
      12 : ["i197", "i125", "i306"],
      13 : ["i157", "i114", "i307"],
      14 : ["i165", "i115", "i308"],
      15 : ["i149", "i116", "i309"],
      16 : ["i269", "i117", "i310"],
      17 : ["i277", "i112", "i311"],
      18 : ["i285", "i113", "i312"],
      19 : ["i293", "i111", "i313"],
      20 : ["Q6ax20", "i110", "i314"],
      21 : ["i1122", "i1124", "i1126"],
      22 : ["i1105", "i1107", "i1115"],
      23 : ["i1093", "i1095", "i1098"],
      24 : ["i1081", "i1083", "i1086"],
      25 : ['i1066', 'i1068', 'i1153', 'i1074'],
      26 : ["i1053", "i1055", "i1059"],
      27 : ["i1040", "i1042", "i1046"],
      28 : ["i1025", "i1027", "i1033"],
      29 : ["Q6ax29", "i1157", "i1160"],
      30 : ["iQ6ax30", "i30", "i1176"],
      31 : ["iQ6ax31", "i1186", "i1188"],
      32 : ["iQ6ax32", "i1208", "i1210"],
      33 : ["iQ6ax33", "i1197", "i1199"],
      34 : ["iQ6ax34", "i1230", "i1232"],
      35 : ["iQ6ax35", "i1219", "i1221"],
      36 : ["iQ6ax36", "i36", "i1245"]
    };
    if (Q6Rc.length > 0) {
      var skip = [];
      for (i in Q6Rc) {
       for (x in Q6RcQids[Q6Rc[i]]) {
        skip.push(Q6RcQids[Q6Rc[i]][x]);
      }
    }
  }

  var qAppend = "^f('Append').domainValues()^".split(",");
    //console.log(["qAppend before ", qAppend]);
    qAppend = _.difference(qAppend, "^f('Append').get()^".split(","));
    //console.log(["qAppend after ", qAppend]);   
    if(qAppend.length>0){
      skip = _.union(skip,qAppend);
    }     
          //console.log([Q6Rc, Q6Rc.length, skip, skip.length]);
          var totalQuestions = qids.length;
          var weight = 100 / totalQuestions;
          var diff = _.difference(qids, skip);
     //var diffWeight = (skip.length * weight) / diff.length;
     var diffWeight = ((106+8) * weight) / diff.length; // 106 = Q6RcQids , 8 = qAppend
     
     var toSwitch = false;

    //console.log("diffWeight: "+diffWeight);

    var percent = null;
    try {
      percent = getData("^CurrentForm()^", true);
    } catch (e) {
      // console.log("catch percent");
      // console.log(e);
      percent = null;
    }

    $('#progressbar').css('visibility', 'visible');
    if (percent != null) {
      if($('#progressbar colgroup col').length==1){
       $('#progressbar colgroup').append('<col>')
       .css({ "border-top": "1px solid #ffffff", "border-right": "1px solid #414099", "border-bottom": "1px solid #414099", "border-left": "1px solid #414099"});
     }
     $('#progressbar colgroup col:eq(1)').css('width', (100 - percent) + '%');
     $('#progressbar colgroup col:eq(0)').css('width', percent + "%");
   }

 }catch(e){
       //console.log("catch");
       //console.log(e);
     }
   });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid��Ŀ�������Ͻ������
$('#Q19_R1_99').parent().hide();
$('#Q19_R2_99').parent().hide();
//����
$('#Q3_R9_3').parent().replaceWith('<td></td>');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PC���ֻ����ò�ͬ��CSS  ����ģ���layout��
^f('Device').get()!=='1'?".confirmit-abtn-grid{width:20px;}":".confirmit-abtn-grid{width:50px;}"^
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���ſ�ֻ��������
$("input").keypress(function (e){
  var charCode = (e.which) ? e.which : e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
});

//Key code
/*
A 65 J 74 S 83 1 49 
B 66 K 75 T 84 2 50 
C 67 L 76 U 85 3 51 
D 68 M 77 V 86 4 52 
E 69 N 78 W 87 5 53 
F 70 O 79 X 88 6 54 
G 71 P 80 Y 89 7 55 
H 72 Q 81 Z 90 8 56 
I 73 R 82 0 48 9 57 
0 96 8 104 F1 112 F7 118 
1 97 9 105 F2 113 F8 119 
2 98 * 106 F3 114 F9 120 
3 99 + 107 F4 115 F10 121 
4 100 Enter 108 F5 116 F11 122 
5 101 - 109 F6 117 F12 123 
6 102 . 110         
7 103 / 111    
BackSpace 8 Esc 27 Right Arrow 39 -_ 189 
Tab 9 Spacebar 32 Dw Arrow 40 .> 190 
Clear 12 Page Up 33 Insert 45 /? 191 
Enter 13 Page Down 34 Delete 46 `~ 192 
Shift 16 End 35 Num Lock 144 [{ 219 
Control 17 Home 36 ;: 186 | 220 
Alt 18 Left Arrow 37 =+ 187 ]} 221 
Cape Lock 20 Up Arrow 38 ,< 188 '" 222 
�� 175             
������ 174             
ֹͣ 179             
���� 173             
����� 172             
�ʼ� 180             
���� 170             
�ղ� 171 
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// �����ͣ ��ʾͼƬ
/*
<script src="/isa/PYAMLMFAKKOYIBEYNHKRJRBIMIEALXOH/PeterGe/hovermain.js" type="text/javascript"></script>
<style>
a{
 text-decoration:none;
color:black;
}
a:hover {color:#ff0000;text-decoration : underline; position : relative;} 
#screenshot{
width:50%;
 position:absolute;
 border:1px solid #e9d315;
 background:#f9f2ba;
 padding:5px;
 display:none;
 -moz-border-radius:4px;
-webkit-border-radius:4px;
border-radius:4px;
 }
#screenshot img{width:100%;}
</style>

<a href="#" class="screenshot" title="/isa/PYAMLMFAKKOYIBEYNHKRJRBIMIEALXOH/273269/P9x1.jpg" target="_black">ǰ���ٻ�����ǿ��</a>
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��ȡʱ��
var date = new Date();
var year = date.getYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();


var date = new Date();
var year = date.getYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var Tday :int = 0;
var Thour :int =0;
var Tmin :String;
var Shour :String;
if(hour <10)
{
  Tday = day;
  Thour = hour + 15;
}
else 
{
  Tday = day + 1;
  Thour = 15 - (24 - hour);
};

if(min<10)
{
  Tmin = "0" + min;
}
else
{
  Tmin = min;
}

if(Thour<10)
{
  Shour = "0" + Thour;
}
else
{
  Shour = Thour;
}

//f('RtimeA').set(year + "��" + month + "��" + Tday + "��" + Thour + "ʱ" + min + "��" + sec + "��");
f('Q12HM').set(Shour.toString()+Tmin.toString());
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�ж�Grid������߻��������һ��ѡ��Ĵ��Ƿ���ڳ�ͻ

var minv=Min(f('Q17').values());
var maxv=Max(f('Q17').values());
var v1=f('Q18x1').toNumber();
var v2=f('Q18x2').toNumber();

if(minv!=maxv)
{
  if(f('Q17')[v1].get()<=minv ||f('Q17')[v2].get()>=maxv)
  {
    RaiseError();
    SetQuestionErrorMessage(CurrentLang(), "����𰸡�");
  }
}

//Method 2
var minv=Min(f('Q8').values());
var maxv=Max(f('Q8').values());
var v1=f('Q9x1').toNumber();
var v2=f('Q9x2').toNumber();

if(f('Q9x1').toBoolean() && f('Q9x2').toBoolean())
{
  if(minv!=maxv)
  {
    if(f('Q8')[v1].toNumber()!=maxv ||f('Q8')[v2].toNumber()!=minv)
    {
      RaiseError();
      SetQuestionErrorMessage(CurrentLang(), "Please check your answers");
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//������Ƶ
/*
Please watch this video. 
<script>
$(document).ready(function(){
$('#forwardbutton').hide();
var vid = document.getElementById("myvideo"); 
vid.onended = function() 
{
 $('#forwardbutton').show();
};
})
</script>
<video controls="true" id="myvideo" width="620" height="440"> 
  <source src="https://d2n88fe5uqdqty.cloudfront.net/ssicn/2017/ORD-278219-Y9T0/A30S.mp4" type="video/mp4">
  <source src="https://d2n88fe5uqdqty.cloudfront.net/ssicn/2017/ORD-278219-Y9T0/A30S.ogv" type="video/ogv">
  <source src="https://d2n88fe5uqdqty.cloudfront.net/ssicn/2017/ORD-278219-Y9T0/A30S.webm" type="video/webm">
  <source src="https://d2n88fe5uqdqty.cloudfront.net/ssicn/2017/ORD-278219-Y9T0/A30S.flv" type="video/flv">
</video>


//������Ƶ
<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/reset.css"/>
<link rel="stylesheet" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/bootstrap.css">
<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/willesPlay.css"/>
<script src="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/jquery-1.10.1.min.js" type="text/javascript" charset="utf-8"></script>
<script src="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/willesPlay.js" type="text/javascript" charset="utf-8"></script>
<style>
html,body{background:#F5F5DC !important;}
.page{width:100%;}
.container{width:95%; text-align:center;border:0px solid #ccc;}
#willesPlay{margin:0px auto;}
@media screen and (max-width:768px){
.container{width:100% !important; text-align:center;border:0px !important;}
}
@media screen and (max-width:480px){
.container{width:100% !important; text-align:center;border:0px !important;}
}
</style>
<script>
$(document).ready(function(){
var vid = document.getElementById("playVideo"); 
$('#progress').hide();
$('#forwardbutton').hide();
vid.onended = function() 
{
$('#progress').show();
$('#forwardbutton').show();
};

})
</script>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div id="willesPlay">
  <!--<div class="playHeader">
    <div class="videoName">���ǵ���Ƶ</div>
  </div>-->
  <div class="playContent">
    <div class="turnoff">
      <ul>
        <!--<li><a href="javascript:;" title="ϲ��" class="glyphicon glyphicon-heart-empty"></a></li>-->
        <li><a href="javascript:;" title="�ص�" class="btnLight on glyphicon glyphicon-sunglasses"></a></li>
        <!--<li><a href="javascript:;" title="����" class="glyphicon glyphicon-share"></a></li>-->
      </ul>
    </div>
    <video width="100%" height="100%" id="playVideo">
      <source src="https://d2n88fe5uqdqty.cloudfront.net/ssicn/2017/ORD-296294-Q8H4/XDMY.mp4 " type="video/mp4">

      </source>
      ��ǰ�������֧�� videoֱ�Ӳ��ţ��������������Ƶ�� <a href="/">������Ƶ</a>
    </video>
    <div class="playTip glyphicon glyphicon-play"></div>
  </div>
  <div class="playControll">
    <div class="playPause playIcon"></div>
    <div class="timebar">
      <span class="currentTime">0:00:00</span>
      <div class="progress" id="progress">
        <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
        </div>
      <span class="duration">0:00:00</span>
    </div>
    <div class="otherControl">
      <span class="volume glyphicon glyphicon-volume-down"></span>
      <span class="fullScreen glyphicon glyphicon-fullscreen"></span>
      <div class="volumeBar">
          <div class="volumewrap">
            <div class="progress">
            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 8px;height: 40%;"></div>
          </div>
            </div>
        </div>
    </div>
  </div>
</div>
      
    </div>
  </div>
</div>
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�ƶ�������Ӧ
@media screen and (max-width:768px){
  .footer {width:90%;}
  .page {width:90%;}
  .content{width:90%;}
  th.gh img{width:90% !important;}
}
@media screen and (max-width:480px){
  .footer {width:100%;}
  .page {width:100%;}
  .content{width:100%;}
  th.gh img{width:100% !important;}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Redirect Link
Redirect("http://www.jdpa.cc/mLottery/BQD/index.html?r="+f('currentid').get()+"&s="+f('currentsid').get()+"&c=0"+"&code="+f('userid').get(),true);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid�� scale��ʾ����

.page{color:#000;}
.confirmit-gb-l{
  text-align:center;
}
.confirmit-gb-star-container{
  width:10%;
}


//$("#Q4x1_header0").hide();
$(".ga").hide();


$('.confirmit-gb-c').css("margin-left","0px");
$('.confirmit-gb-c').css("width","100%");
$('.confirmit-gb-c').find('table').css("width","100%");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//QuotaȦѡ���ٵ�
var answers = f("Q3Hidden").get(); //codes of all brands selected
for(var i : int = 0;i<answers.length;i++) //iterate through the codes
{
  var code = answers[i]; //current code
  f("quotaQ3").set(code); //try to preset this code
  if(!qf("Age")) //check if quota is not full for this code
  {
    break; //if quota is not full, keep this brand
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid  numeric list�� open text list��  �ڿ��ſ���������
$('.numberinput').after("<span style='margin-left:5px;'>%</span>");
$('.numberinput').after("<span style='margin-left:5px;'>��</span>");
$('.numberinput').after("<span style='margin-left:5px;'>Ԫ</span>");
$('.numberinput').after("<span style='margin-left:5px;'>��</span>");
$('.numberinput').after("<span style='margin-left:5px;'>��</span>");
$('.numberinput').after("<span style='margin-left:5px;'>��</span>");
$('.numberinput').after("<span style='margin-left:5px;'>��Ԫ</span>");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grdi ��ֵ�⣬���� �������

#textadd{border:1px solid #333; border-radius:4px;width:100%;margin-top:10px;font-size:16px;}
.confirmit-grid tr:first-child{border:0px;}
.gha{border:1px solid #ccc; text-align:center;}


$("#A19_header0").parent().before("<tr><td></td><td></td><td colspan=6 class=gha><b>��������</b></td><td></td></tr>");

var arr = [];
var arr2 = [];
var x = 0;
var y = 0;

$("#fieldset_Q2x2 input").each(function() {
  if($.inArray($(this).prop('id').split('_')[0],arr)==-1)
  {
    arr[x]=$(this).prop('id').split('_')[0];
    x++;
  }
  if($.inArray($(this).prop('id').split('_')[1],arr2)==-1)
  {
    arr2[y]=$(this).prop('id').split('_')[1];
    y++;
  }
});

//ֻ��ģʽ
/*$("[id*="+arr[arr.length-1]+"]").each(function() {
$(this).prop('disabled', true);
});
*/

//�ı䱳����ɫ
$("[id*="+arr[arr.length-1]+"]").each(function() {
  $(this).css('background', "#cccccc");
});


$('#fieldset_Q2x2 input').keyup(function() {
  sum=0;
  for(x=1;x<arr.length-1;x++)
  {
    if(parseInt($('#'+arr[x]+'_'+$(this).prop('id').split('_')[1]).val())>0) sum+=parseInt($('#'+arr[x]+'_'+$(this).prop('id').split('_')[1]).val());
  }
  $('#'+arr[arr.length-1]+'_'+$(this).prop('id').split('_')[1]).val(sum);
});

for(y=0;y<arr2.length;y++)
{
  sum=0;
  z=0;
  for(x=1;x<arr.length-1;x++)
  {
    if(parseInt($('#'+arr[x]+'_'+arr2[y]).val())>0)
    {
      sum+=parseInt($('#'+arr[x]+'_'+arr2[y]).val());
      z++;
    }
  }
  if(z>0) $('#'+arr[arr.length-1]+'_'+arr2[y]).val(sum);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//����open text list���� �������text�����
td.answerlabel{width:auto;}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�ı������ͣʱ����ɫ
$('.answerlabel').each(function(){
  $(this).parent().hover(function(){
   $(this).addClass('hoverColor');
 },function(){
   $(this).removeClass('hoverColor');
 });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Open Text List ��Ŀ ѡ������ѡ�����տ����⣬�����޷���д��
$('#S9DK_99').click(function(){
  if($(this).is(":checked"))
  {
    $('#S9_1,#S9_2,#S9_3,#S9_4,#S9_5,#S9_6,#S9_7,#S9_8,#S9_9,#S9_10').val("");
    $('#S9_1,#S9_2,#S9_3,#S9_4,#S9_5,#S9_6,#S9_7,#S9_8,#S9_9,#S9_10').attr("disabled",true);
  }else
  {
   $('#S9_1,#S9_2,#S9_3,#S9_4,#S9_5,#S9_6,#S9_7,#S9_8,#S9_9,#S9_10').attr("disabled",false);
 }

});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��ģ�� ȡ����ͣ��ɫ ѡ���ѡ


.mainContent{
  width:100%;
}

#__Q14_R1_image,#__Q14_R2_image,#__Q14_R3_image,#__Q14_R4_image,#__Q14_R5_image,#__Q14_R6_image{
  display:none !important;
  visibility:hidden;
}
#Q14_R1,#Q14_R2,#Q14_R3,#Q14_R4,#Q14_R5,#Q14_R6{
  display:none !important;
  visibility:hidden !important;
}


for(var i=1;i<=6;i++)
{
  $("#Q14_R"+i+"_label").parent().parent().hover(function(){
    $(this).addClass("ShoverColor");
  }),function(){
    $(this).removeClass("ShoverColor");
  }
  
  $("#Q14_R"+i).attr("disabled",true);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��������Ҽ�
//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/imageprotection/imageProtection.min.js

//��������Ҽ�
$(document).ready(function(){  
  $(document).bind("contextmenu",function(e){   
    return false;   
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ȡ��λС��
parseFloat(XXX).toFixed(2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//������� ������ ֻ�ش�ϲ����
/*
<style> fieldset { display:none } .nav { display: none1} #target { text-align:justify; line-height: 130%;} .text { padding: 0 10px; }</style>
<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/texthighlighter/css/text_highlight_v1.5.css"/>
^jQueryToolColor("text_highlighting")^
<style>div.questionarea {position: static;}</style>
<script src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/_root/ssi_ALLInOne_Confirmit_1.5.js"></script>
<script src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/texthighlighter/js/text_highlight_v1.5.2.min.js"></script>

<div id="target">
<span class='word' id='1'>���Ի���ƣ�������������</span><br>
<span class='word' id='2'>���űȶ�������������һ���ǳ���ޡ����۵�����</span>��
<span class='word' id='3'>������������ڳ�Ϊ��������ð���</span>��
<span class='word' id='4'>����Ϊ���ṩ�ḻ�������Ի��Ĳ�Ʒ�����Լ�һվʽ�������������</span>��
<span class='word' id='5'>������ĸ���������������麢�ӳɳ�</span>��

</div>

  <div class="chooseApealing">
    <ul><li><a id="likeButton"></a></li><li><a id="dislikeButton"></a></li><li><a id="removeButton"></a></li></ul><div class="close"></div>
  </div>
  <div class="dk_container">
    <div id="likeDK" class="dk_button">None of these L</div><div id="dislikeDK" class="dk_button">None of these D</div>
  </div>
  <div id="openends">
    <div class="likedBox"><div class="boxlabel"><span class="boxLikeLabel">Words you find appealing</span></div><div class="likedBoxcontents"></div></div>
    <div class="dislikedBox"><div class="boxlabel"><span class="boxDislikeLabel">Words you find unappealing</span></div><div class="dislikedBoxcontents"></div></div>    
  </div>

   <script>
      $(document).ready(function() {
        var theForms = new Array();
        theForms[1] = getFormName(1);
        theForms[2] = getFormName(2);

        $('#target').TextHighlighter({
          typeOfQuestions: "L", // Possible values: "LD" - stores data into GRID question  #### "L" or "D"  - stores data into MR question
          typeOfTool: 1, // Possible values: "1" - Like and Dislike on single page #### "2" - Like and Dislike on separate pages, after pressing Next btn
          isTest: false,
          gridForm: theForms[1],
          openendForm: theForms[2],
          removeButtonText: "Remove",
          AutoWrapWords: false,
          minNrAnswersTotal:1,
          minNrAnswersLike:1,
          minNrAnswersDislike:0,
          isDK: true,
          txtDKLike: "���Ͻ���",
          txtDKDislike: "",                 
          likeDKcode: 997,
          dislikeDKcode: 998,
          showSelectedWords: false,
          nextBtn: "//d2n88fe5uqdqty.cloudfront.net/rnd/template/next_SSIglobal.png",
          ExportListToConsole: false,
          aPreloadImages : [
    '//d2n88fe5uqdqty.cloudfront.net/rnd/tools/texthighlighter/images/dk_like_h.png',
    '//d2n88fe5uqdqty.cloudfront.net/rnd/tools/texthighlighter/images/dk_dislike_h.png',
    '//d2n88fe5uqdqty.cloudfront.net/rnd/tools/texthighlighter/images/green_ball.png',
    '//d2n88fe5uqdqty.cloudfront.net/rnd/tools/texthighlighter/images/red_ball.png'
]
        });
countIt({             
  "tool-id":"jTH001", 
  "project-id" : "^CurrentPID()^",
  "order-id" : "^getOrderID()^"
});
      });    
   </script>
   <br/>
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�ͻ���Ҫ��DPCA IQS/Apeal�����������еĻ�ӭҳ���������һ���� �������Ǹ��µ�����ʾ�����ǰ���S0�⣬�����и����⣬
//�ͻ�˵���ѡ��񣬲�Ҫ��¼Ϊscreen out��������մ𰸣����Ǳ��not start����incomplete���ú����Ǹ��˽�����ʱ�����»ش�����

//Survey Settings��ֻ���ϡ�Allow respondents to change their orignal answers��,��Limited Survey - Email invitation survey��


//��¼���һ����Ĵ����Ϊ��
function CaptureQuestions() //�ĳɵ�ǰ������ĺ�����
{
 if(!f(CurrentForm()).toBoolean())
 {
  f('lastquestion').set(CurrentForm());
}
}

//��S0�����д�ű�

if(f('lastquestion').get()!='S0')
{
  Redirect("https://confirmit.ssisurveys.com/wix5/p67906165.aspx?r="+f('currentid').get()+"&s="+f('currentsid').get()+"&__qid="+f('lastquestion').get(), true)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid �� ѡ������
$('.gridcell').parent().find('.gridlabel').css("text-indent","40px");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//����
/*
<link rel="stylesheet" href="//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/jquery-ui/themes/smoothness/jquery-ui.min.css" />
<link rel="stylesheet" href="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/sliders/app/css/basicSlider_1.5.css" />
<link rel="stylesheet" href="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/sliders/app/css/basicSlider_grey_0.8.css" />
<link rel="stylesheet" href="//d2n88fe5uqdqty.cloudfront.net/rnd/template/GSL_2016/tool_css/quickthought/basicSlider.css" /> <!-- update this custom css-->

<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/jquery-ui/ui/minified/jquery-ui.min.js"></script>
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/jquery-ui/jquery.ui.touch-punch.min.js"></script>
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/allinonejs/ssi_ALLInOne_Confirmit_2.2.min.js"></script>
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/sliders/app/js/basicSlider_mod_1.1.9.js"></script>
<center><div id="toolContainer"></div></center>

<style>
div.txtBox-wrapper {border-bottom: none;padding-top: 15px;}
@media only screen and (min-width : 1400px) {
div.txtBox-wrapper {padding-top: 50px;}
}
</style>

<script type="text/javascript">
$(function () {
  $("#toolContainer").basicSlider({
    cAll      : true,
    navigation    : '#forwardbutton',
    length      : 500,
    enableNumPad  : false,
    min       : 15,
    max       : 50,
    shwTick     : true,
    shwMidTick    : true,
    shwTitle    : true,
    initValue   : 5,
    hover     : true,
    stickyHover   : true,
    shwHandleOnDK : false,
    step      : 1,
    showFixedDecimal  : 0,
    shwTxtBox     : true,
    orientation   : 'horizontal',
    isRTL       : false, 
    sLeft       : '���ޣ�15Ԫ/����', 
    sMid      : '', 
    sRight      : '���ޣ�50Ԫ/����',

    
    
    onReady: function() {}
  });
});
</script>

<style>
#txtBox_toolContainer1,#txtBox_toolContainer2{
display:none;
}
.txtBox-wrapper .sTitle {
    height: auto;
    line-height: 20px;
    margin-bottom: 15px;
    padding-bottom: 0 !important;
}
</style>
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CSS3 ʵ�������ͣ �Ŵ�ͼƬ
.text img{  
  cursor: pointer;  
  transition: all 0.6s;   /*�Ŵ�����0.6s�����*/ 
}  
.text img:hover{  
  transform: scale(2); /*�Ŵ���*/  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////            }  
//����X�������
body{
  overflow-x:hidden;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Multi Grdi ÿ��ѡ����ѡ���������ͬ ���
((f('S12_1').get().toString()==f('S12_2').get().toString())&&
 (f('S12_1').get().toString()==f('S12_3').get().toString())&&
 (f('S12_1').get().toString()==f('S12_4').get().toString())&&
 (f('S12_1').get().toString()==f('S12_5').get().toString())&&
 (f('S12_1').get().toString()==f('S12_6').get().toString())&&
 (f('S12_1').get().toString()==f('S12_7').get().toString())&&
 (f('S12_1').get().toString()==f('S12_8').get().toString())&&
 (f('S12_1').get().toString()==f('S12_9').get().toString())&&
 (f('S12_1').get().toString()==f('S12_10').get().toString())&&
 (f('S12_1').get().toString()==f('S12_11').get().toString())&&
 (f('S12_1').get().toString()==f('S12_12').get().toString())&&
 (f('S12_1').get().toString()==f('S12_13').get().toString())&&
 (f('S12_1').get().toString()==f('S12_14').get().toString())&&
 (f('S12_1').get().toString()==f('S12_15').get().toString())&&
 (f('S12_1').get().toString()==f('S12_16').get().toString())&&
 (f('S12_1').get().toString()==f('S12_17').get().toString())&&
 (f('S12_1').get().toString()==f('S12_18').get().toString())&&
 (f('S12_1').get().toString()==f('S12_19').get().toString())&&
 (f('S12_1').get().toString()==f('S12_20').get().toString()))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��¼�ش�����һ����,��ģ���м���^drop()^
function drop()  { 
  if(!f(CurrentForm()).toBoolean())
  {
    f('LastQuestion').set(CurrentForm());
  }
  
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Globalģ�壬���������ѡ�򻥳⣬ֻ��һ����ѡ��
$(':text').attr("maxlength","2");

$('.abtn').click(function(){
  $(':text').val('');
});

$(':text').keyup(function(){
  $('.abtn').find('input').prop('checked',false);
  $('.abtn').removeClass('selectedcolor abtn-selected multi-selected').addClass('unselectedcolor multi');  
});
$('.answersection :last').css({'width':'30%', 'text-align':'left', 'margin-top':'-10px', 'margin-left':'10px'});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Globalģ�壬���������ѡ�򻥳⣬�ж����ѡ��
$(':text').attr("maxlength","2");

$('.abtn').click(function(){
  $(':text').val('');
  $('.abtn').not($(this)).removeClass('selectedcolor abtn-selected multi-selected').addClass('unselectedcolor multi');  
  $('.abtn').not($(this)).find('input').prop('checked',false);
});

$(':text').keyup(function(){
  $('.abtn').find('input').prop('checked',false);
  $('.abtn').removeClass('selectedcolor abtn-selected multi-selected').addClass('unselectedcolor multi');  
});

$('.answersection :last').css({'width':'30%', 'text-align':'left', 'margin-top':'-10px', 'margin-left':'10px'});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���飬˳�������ѭ��ʱ���á���������̶������

//changed this to the number of rotation needed
var order = [0,1,2,3,4,5];

var val = shuffle(order);
f('hidShuffle').set(val);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//��������hidShuffle

//����Ŀ�м���JS����
$(':text').attr("maxlength","200");
//var text = "^f('l').any('9')^" == "true" ? "Other benefits" : "��������";
var text = "^f('l').any('9') ? 'Other benefits' : '��������'^";
$('#BEN1_61').parent().parent().before('<tr class="cust-other-header"><td colspan="2" class="group-header-label"><b>'+text+'</b></td></tr>');

var $rows = [];
var $header = $(".cust-other-header");
//group to be anchored
$("#BEN1_61,#BEN1_62,#BEN1_63,#BEN1_64,#BEN1_65,#BEN1_69").each(function(){ 
  $rows.push($(this).closest("tr").detach());
});


//changed this to the number of rotation needed
var order1 = "^f('hidShuffle').get()^";
var order = order1.split(",");
//alert(order1);
//alert(order);

//var val = shuffle(order);


for(var i in order) {
  $header.after($rows[order[i]]);
}

$('#BEN1_97').parent().parent().before("<tr><td></td></tr>");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Numeric�� �ı�����һ��
.confirmit-table{
  border-collapse:unset !important;
}
.confirmit-table td{display:inline !important;}
td.answerlabel{display: none !important;}
.questionarea table {
  width: auto !important;
}

^f('Device').get()!='1'?"<style>.numberinput{width:80px}</style>":""^

$('#Q16_2').after(" <span style=\"margin-left:5px;\">��Ԫ</span>");
$('#Q16_1').after(" <font size=\"2px\">.</font>");
$('.confirmit-table').parent().css('width','0%');
$('.confirmit-table').eq(1).css({'position':'relative','left':'-8px'});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ʵʱ����Numeric list�⣬������ĺ�  FS ORD-311237-J1T7-Gym study-Bain*test* (p2249675)


.groupanswerinput{width:1%;}
#Q14b_103,#Q14b_203,#Q14b_303{background-color:gray;}



$("#Q14b_103").attr("readonly",true);
$("#Q14b_203").attr("readonly",true);
$("#Q14b_303").attr("readonly",true);

$(function(){
  var first = $("#Q14b_101");
  var second = $("#Q14b_102");
  var sumSP = $("#Q14b_103");
  first.change(function(){
    var num1 = first.val();
    var num2 = second.val();
    var sum = num1 * num2;
    sumSP.val(sum);
  });
  second.change(function(){
    var num1 = first.val();
    var num2 = second.val();
    var sum = num1 * num2;
    sumSP.val(sum);
  });
  
  var first1 = $("#Q14b_201");
  var second1 = $("#Q14b_202");
  var sumSP1 = $("#Q14b_203");
  first1.change(function(){
    var num1 = first1.val();
    var num2 = second1.val();
    var sum = num1 * num2;
    sumSP1.val(sum);
  });
  second1.change(function(){
    var num1 = first1.val();
    var num2 = second1.val();
    var sum = num1 * num2;
    sumSP1.val(sum);
  });
  
  var first2 = $("#Q14b_301");
  var second2 = $("#Q14b_302");
  var sumSP2 = $("#Q14b_303");
  first2.change(function(){
    var num1 = first2.val();
    var num2 = second2.val();
    var sum = num1 * num2;
    sumSP2.val(sum);
  });
  second2.change(function(){
    var num1 = first2.val();
    var num2 = second2.val();
    var sum = num1 * num2;
    sumSP2.val(sum);
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ʵʱ����Numeric �� �ܺ�  FS ORD-311237-J1T7-Gym study-Bain*test* (p2249675)
$("#Q14b_5").attr("readonly",true);

$(function(){
  $("#Q14b_101").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val()) || 0) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val()) || 0) +
      (($("#Q14b_301").val() * $("#Q14b_302").val()) || 0) +
      (($("#Q14b_401").val() * 1) || 0));

  });
  $("#Q14b_102").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val() || 0)) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val() || 0)) +
      (($("#Q14b_301").val() * $("#Q14b_302").val() || 0)) +
      (($("#Q14b_401").val() * 1) || 0));

  });
  
  $("#Q14b_201").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val() || 0)) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val() || 0)) +
      (($("#Q14b_301").val() * $("#Q14b_302").val() || 0)) +
      (($("#Q14b_401").val() * 1) || 0));
  });
  $("#Q14b_202").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val() || 0)) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val() || 0)) +
      (($("#Q14b_301").val() * $("#Q14b_302").val() || 0)) +
      (($("#Q14b_401").val() * 1) || 0));

  });

  $("#Q14b_301").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val() || 0)) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val() || 0)) +
      (($("#Q14b_301").val() * $("#Q14b_302").val() || 0)) +
      (($("#Q14b_401").val() * 1) || 0));
  });
  $("#Q14b_302").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val() || 0)) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val() || 0)) +
      (($("#Q14b_301").val() * $("#Q14b_302").val() || 0)) +
      (($("#Q14b_401").val() * 1) || 0));

  });
  
  $("#Q14b_401").change(function(){
    $("#Q14b_5").val( (($("#Q14b_101").val() * $("#Q14b_102").val() || 0)) + 
      (($("#Q14b_201").val() * $("#Q14b_202").val() || 0)) +
      (($("#Q14b_301").val() * $("#Q14b_302").val() || 0)) +
      (($("#Q14b_401").val() * 1) || 0));

  });
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�ѵ�ѡ����뵽Numeric����ȥ  FS ORD-311237-J1T7-Gym study-Bain*test* (p2249675)
$('#Q14b_102_label').parent().parent().after("<tr><td id=\"txt1\"></td><td id=\"btn1\"></td><td id=\"btn2\"></td></tr>");
$('.showTitle').remove();
$("#txt1").html($('#Q14c_text').html());
$('#btn1').append($('input#Q14c_1').css({'width':'100%','height':'30px'}).closest('tr'));
$('#btn2').append($('input#Q14c_2').css({'width':'100%','height':'30px'}).closest('tr'));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ð������
function sortArray(arr){
  for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-1-i;j++){
      if(arr[j]>arr[j+1]){
        var temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  return arr;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid  Numeric�� �������
var arr = [];
var x = 0;


$("#fieldset_Q2x2 input").each(function() {
  if($.inArray($(this).prop('id').split('_')[0],arr)==-1)
  {
    arr[x]=$(this).prop('id').split('_')[0];
    x++;
  }
});

$('#fieldset_Q2x2 input').keyup(function() {
  sum=0;
  for(x=0;x<arr.length-1;x++)
  {
    if(parseInt($('#'+arr[x]+'_'+$(this).prop('id').split('_')[1]).val())>0) sum+=parseInt($('#'+arr[x]+'_'+$(this).prop('id').split('_')[1]).val());
  }
  $('#'+arr[arr.length-1]+'_'+$(this).prop('id').split('_')[1]).val(sum);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid �� �������û��Label  ȥ���߿�ȥ���հ�
.confirmit-grid thead tr th:first-child{display:none !important;}
.gridlabel{display:none !important;}
.scale{width:20% !important;}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�����ѡ���Label�ǻ��ѽ�������Ҫ������ѡ��ѡ���Ļ��ѽ����ܺͣ�����parseInt()����
f('sumCOST').set(parseInt(f('Q1').valueLabel()) + parseInt(f('Q2').valueLabel()));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var date = new Date(); //��ȡ��ǰ����
var time = date.getTime();//���ؾ� 1970 �� 1 �� 1 ��֮��ĺ�����
f('testTime')['2'].set(time/1000);//����
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Globalģ�� Grid����Ч�������ҳ��������
div.pagearea.showcode-containter {
  max-width: 80% !important;
}
.scale img{
  width:60% !important;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid ��ֵ�����ѡ�⻥�⣬checkbox��ԭʼ״̬
//�ο���Ŀ FS ORD-320697-Z4V9-Fintech survey��Consumer�� -Bain*Live* (p2656951)
$(document).ready(function(){
  $('.confirmit-grid tbody tr').each(function(){
   if($(this).find('.gridcell').find('.numberinput').val().trim().length > 0){
    $(this).find('.gridcell').find('input[type=checkbox]').attr('checked',false);          
  }
  var that=$(this);
  $(this).find('.gridcell').find('.numberinput').on("keyup",function(){

   if($(this).val() != ""){
    that.find('.gridcell').find('input[type=checkbox]').attr('checked',false);
    
  }      
});
  $(this).find('.gridcell').find('input[type=checkbox]').on("click",function(){

   that.find('.gridcell').find('.numberinput').val('');      
 });   
});

})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid ��һ�ж�ѡ�� �ڶ�����ֵ��  ��ѡѡ���� ��ֵ�����
//�ο���Ŀ FS ORD-320697-Z4V9-Fintech survey��Consumer�� -Bain*Live* (p2656951)
$(document).ready(function(){
  $('.confirmit-grid tbody tr').each(function(){
    //$(this).find('.gridcell').eq(1).find('.numberinput').after("<span class='curency'> %</span>");
    if($(this).find('.gridcell').eq(1).find('.numberinput').val()!=""||$(this).find('.gridcell').eq(0).find('input[type=checkbox]').is(':checked')){
      $(this).find('.gridcell').eq(1).find('.numberinput').attr('disabled',false);          
    }else{       
      $(this).find('.gridcell').eq(1).find('.numberinput').attr('disabled',true);
    }
    var that=$(this);
    $(this).find('.gridcell').eq(0).click(function(){

      if($(this).find('input[type=checkbox]').is(':checked')){
        that.find('.gridcell').eq(1).find('.numberinput').val("").attr('disabled',true);

      }else{
       that.find('.gridcell').eq(1).find('.numberinput').attr('disabled',false);
     }      
   });   
  });

})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ѡȡ��ֵ������д����ǰ����
function sortArray(arr){
  for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-1-i;j++){
      if(arr[j]<arr[j+1]){
        var temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  return arr;
}

var array= [];

for(var i = 1; i <= 11; i++)
{
  if(f('Q2x3')[i].toBoolean())
  {
    array.push(f('Q2x3')[i].toNumber());
  }
}


sortArray(array);

ClearForm(f('Q2x7Hidden'));

var form = f('Q2x3');
var form2 = f('Q2x7Hidden');
var precodes = form.domainValues();
for(var i = 0; i < precodes.length; i++) {
  var code = precodes[i];
  if(form[code].toNumber() == array[0]) {form2[code].set('1')}
    else if(form[code].toNumber() == array[1]) {form2[code].set('1')}
      else if(form[code].toNumber() == array[2]) {form2[code].set('1')}
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ranking�� �������Ŀֻѡ��1����ʱ��Ranking���Զ���ֵ
f('rank').set(f('c1').get());
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid�� ��һ�е�ѡ���ڶ�����ٷֱȣ�������ѡ����⣬��һ�е�ѡѡ��ʱ���ڶ��У������п���д�����򲻿���д
//�ο���Ŀ  FS ORD-322518-B3J3 2017 China Bain (p2752852)
$('#C16NABBx2_1').after(" <span style='margin-left:5px;'>%</span>");
$('#C16NABBx2_2').after(" <span style='margin-left:5px;'>%</span>");


$(".confirmit-grid tbody tr").each(function () {
  if($(this).find(".gridcell").find("input[type=radio]").is(":checked")) {
    $(this).find("input[type=text]").attr("disabled",false);  
  } else {
    $(this).find("input[type=text]").attr("disabled",true); 
  }
  
  $(this).find(".gridcell").click(function () {
    $(this).parent().find("input[type=text]").attr("disabled",false);
    $(this).parent().siblings().find("input[type=text]").attr("disabled",true); 
  })
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�ı���ֻ��
$("#Q17NAAA_1").attr("readonly",true);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���������ܶ��������ѡ��Ϊ���ѶΣ����Ұ��������ַ�
//parseInt�����ַ����еĵ�һ�����֣�ֱ���������ַ�Ϊֹ
if(f('Q1') != '99') {
  if(f('Q1').any('1','7','8','14','15','21','22','28','29','35','36',
   '42','43','49','50','56','57','63','64','70')) {
    sum1 = sum1 + (parseInt(f('Q1').valueLabel()) *12)
} else {
  var code1 = f('Q1').valueLabel();
  var array1 = code1.split("-");
  sum1 = sum1 + ( ( (parseInt(array1[0]) + parseInt(array1[1]) ) / 2 ) * 12 )
}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ģ�����Grid�������
$(document).ready(function(){
//other input set start;
function showBtn(str){
  var obj=(str==$(this))?str:$(str);

  var len=obj.val().trim().length;
  $('.confirmit-grid tr').css('border-right','1px silver solid')
  obj.parent().nextAll().each(function(){ 
    if(len>0){
      $(this).show();   
      $(this).find('input[type="radio"]').attr('disabled',false);
    }else{
     $(this).hide();   
     $(this).find('input[type="radio"]').attr('disabled',true); 
   }        
 });           
}
if($('.other_input').length>0){
 showBtn('.other_input');
 $('.other_input').each(function(){
   $(this).bind("keyup",function(){
    showBtn($(this));                     
  });
 });
}
//other input set end;  

//����grid��ͷ�̶���  
changeWidth();  
window.onresize=function(){ 
 changeWidth(); 
}   

window.onscroll=function(){ 
  if($('.confirmit-grid thead').length!=0){
    headFix();   
  } 
}
function headFix(){
  var oTop=parseInt($('.confirmit-grid tbody').offset().top);
  var scrollT=parseInt(document.body.scrollTop)||parseInt(document.documentElement.scrollTop);  

  if(parseInt($(window).width())<751){
   if(scrollT>oTop){           
    $(".confirmit-grid thead").addClass("theadFix"); 
    $('.confirmit-grid thead').css('width',$('.confirmit-grid').outerWidth());
    var scaleLen=parseInt($(".confirmit-grid thead .scale").length);
    $('.confirmit-grid thead .scale').css('width',100/scaleLen+'%');

    var scaleLen1=parseInt($(".confirmit-grid thead .scalegroupheader").length);          
    var scaleLen2=parseInt($(".confirmit-grid thead .scalegroupanswer").length);
    if(scaleLen1==scaleLen2){
     $('.confirmit-grid thead .scalegroupheader').css('width',100/scaleLen1+'%');           
     $('.confirmit-grid thead .scalegroupanswer').css('width',100/scaleLen2+'%');           }

   }else{
    $('.confirmit-grid thead').removeClass('theadFix');
    changeWidth(); 
  }

       //$('.theadFix tr th:first').css('width',$('.gridlabel').width());
     }
   }

//�ı��ͷ�Ŀ�Ⱥ�����
function changeWidth(){
 if($(window).width()<=751){
  $('.confirmit-grid thead').css('width',$('.confirmit-grid').outerWidth());

  if($('.confirmit-grid tr').length<=2&&$('.confirmit-grid tbody tr th:first-child').html()==''){
    delFirstallth();
  }else if($('.confirmit-grid tr').length<=2&&$('.confirmit-grid tbody tr th:first-child').html()!=''){
    delFirstth();         
  }else{
    delFirstth(); 
  }
  var scaleLen=parseInt($(".confirmit-grid thead .scale").length);
  $('.confirmit-grid thead .scale').css('width',100/scaleLen+'%');  

  var scaleLen1=parseInt($(".confirmit-grid thead .scalegroupheader").length);          
  var scaleLen2=parseInt($(".confirmit-grid thead .scalegroupanswer").length);
  if(scaleLen1==scaleLen2){
   $('.confirmit-grid thead .scalegroupheader').css('width',100/scaleLen1+'%');           
   $('.confirmit-grid thead .scalegroupanswer').css('width',100/scaleLen2+'%');
 }
}else{

         if($('.confirmit-grid tr').length>2){//���tr���ȴ���2ʱ��Ҫ�Զ�������ѡʱִ�У�
          addFirstth();    
          $('.confirmit-grid thead .scale').css('width','auto');
        }else if($('.confirmit-grid tr').length<=2&&$('.confirmit-grid tbody tr th:first-child').html()==''){
          delFirstallth();
        }else if($('.confirmit-grid tr').length<=2&&$('.confirmit-grid tbody tr th:first-child').html()!=''){
          addFirstth();          
        }  
        $('.confirmit-grid thead').removeClass('theadFix');
      }           
    }
//ȥ��grid thead tr ��һ��th�� 
function delFirstth(){    
  $('.confirmit-grid thead tr:first-child th:first-child').css({'display':'none'});
}
//��grid tr<=2ʱȥ����һ��th��
function delFirstallth(){
  $('.confirmit-grid tr th:first-child').css({'display':'none'});    

}
//���� grid thead tr ��һ��th��
function addFirstth(){    
 $('.confirmit-grid thead tr th:first-child').css({'visibility':'visible','display':'block'});
}
 //���groupheader����
 $('<th class="addTh">').insertBefore($('.scalegroupanswer:first'));

})//$(document).ready(function(){ end;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//����loop���е�Label
^f('Q11')[f('l1').toNumber()].any('0','1','2','3','4','5','6')?"��Ϊʲô��Ը���Ƽ�<b>" + f('l1') + "</b>��":
f('Q11')[f('l1').toNumber()].any('7','8')?"��Ϊʲô��<b>" + f('l1') + "</b>�Ƚ�������":
"��ΪʲôԸ���Ƽ�<b>" + f('l1')+"</b>��"^
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
f(qID)
/*
Values returned 
 
Single:
 The code of the answer.
 
Open, Numeric and Date:
 A string with the answer.
 
Multi:
 A set with the codes of the answers selected.
 
Ranking, OpenText List or Numeric List:
 A set with the codes of the elements in the answer list that are answered.
 
Grid:
 A set with the codes of the elements in the answer list that are answered.
 
"Other" from answer lists:
 A string with the text answered.
 */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
f(qID).domainValues() 
/*
����������ص��ǳ�ʾ�������ߵ�list������ڷ���ʱ��ĳ��code�������ˣ���ô��������ǲ��᷵�����code�ģ���ʹ��ʱҪע��
This will return an array with all codes from the answer list of a single, multi, ranking, open text list, numeric list or grid 
question, headers excluded.

This method is subject to masking, so if a code mask is used to filter the answer list then this will only return the codes of the 
answers that are displayed to the respondent.

The method is also subject to randomization. That is, if the answer list is randomized, then the array will be returned randomized.

For hierarchy and table lookup questions, only the first 500 (server setting: WIMaxExternalLookupEntries) hits are returned. 
If the limit is exceeded, an error is returned.
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid ��������������ע������3D Grid���Open Text List�����һ��Page���Open Text List��ȥ�滻3D Grid����������ע����һ����ĵ�ѡ���ѡ��ť
$("#SummerD5A_97").replaceWith($('input#GridOpen_1').css({'width':'80%','height':'20px'}).closest('td'));
$("#SummerD5B_97").replaceWith($('input#GridOpen_2').css({'width':'80%','height':'20px'}).closest('td'));
$("#SummerD5C_97").replaceWith($('input#GridOpen_3').css({'width':'80%','height':'20px'}).closest('td'));
$("#GridOpen_1").siblings().hide();
$("#GridOpen_2").siblings().hide();
$("#GridOpen_3").siblings().hide();
//����ѡ
//Stard
$("#GridOpen_1").focus(function () {
  $(this).parent().parent().parent().siblings().each(function () {
    $(this).find("a").eq(0).find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/radiored1.png");  
    $(this).find("input[type=radio]").eq(0).attr("checked",false);
  })
})
$("#GridOpen_2").focus(function () {
  $(this).parent().parent().parent().siblings().each(function () {
    $(this).find("a").eq(1).find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/radiored1.png");  
    $(this).find("input[type=radio]").eq(1).attr("checked",false);
  })
})
$("#GridOpen_3").focus(function () {
  $(this).parent().parent().parent().siblings().each(function () {
    $(this).find("a").eq(2).find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/radiored1.png");  
    $(this).find("input[type=radio]").eq(2).attr("checked",false);
  })
})

$(".confirmit-grid tbody tr").each(function() {
  $(this).find(".gridcell").eq(0).click(function () {
    $("#GridOpen_1").val("");
  })
  $(this).find(".gridcell").eq(1).click(function () {
    $("#GridOpen_2").val("");
  })
  $(this).find(".gridcell").eq(2).click(function () {
    $("#GridOpen_3").val("");
  })
})
//End
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���Ա������Ƿ���Թۿ���Ƶ
<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/reset.css"/>
<link rel="stylesheet" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/bootstrap.css">
<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/willesPlay.css"/>
<script src="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/jquery-1.10.1.min.js" type="text/javascript" charset="utf-8"></script>
<script src="//d2n88fe5uqdqty.cloudfront.net/ssicn/Jquery/video/willesPlay.js" type="text/javascript" charset="utf-8"></script>
<style>
html,body{background:#F5F5DC !important;}
.page{width:100%;}
.container{width:95%; text-align:center;border:0px solid #ccc;}
#willesPlay{margin:0px auto;}
@media screen and (max-width:768px){
  .container{width:100% !important; text-align:center;border:0px !important;}
}
@media screen and (max-width:480px){
  .container{width:100% !important; text-align:center;border:0px !important;}
}
</style>
<script>
$(document).ready(function(){
  var vid = document.getElementById("playVideo"); 
  $('#progress').hide();
  $('#forwardbutton').hide();
  vid.onended = function() 
  {
    $('#progress').show();
    $('#forwardbutton').show();
  };

})
</script>
</head>
<body>
<div class="container">
<div class="row">
<div class="col-md-12">
<div id="willesPlay">
<!--<div class="playHeader">
<div class="videoName">���ǵ���Ƶ</div>
</div>-->
<div class="playContent">
<div class="turnoff">
<ul>
<!--<li><a href="javascript:;" title="ϲ��" class="glyphicon glyphicon-heart-empty"></a></li>-->
<li><a href="javascript:;" title="�ص�" class="btnLight on glyphicon glyphicon-sunglasses"></a></li>
<!--<li><a href="javascript:;" title="����" class="glyphicon glyphicon-share"></a></li>-->
</ul>
</div>
<video width="100%" height="100%" id="playVideo">
<source src="//d2n88fe5uqdqty.cloudfront.net/ssicn/2018/ORD-319183-G6Y3/XM.mp4" type="video/mp4">

</source>
��ǰ�������֧�� videoֱ�Ӳ��ţ��������������Ƶ�� <a href="/">������Ƶ</a>
</video>
<div class="playTip glyphicon glyphicon-play"></div>
</div>
<div class="playControll">
<div class="playPause playIcon"></div>
<div class="timebar">
<span class="currentTime">0:00:00</span>
<div class="progress" id="progress">
<div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
</div>
<span class="duration">0:00:00</span>
</div>
<div class="otherControl">
<span class="volume glyphicon glyphicon-volume-down"></span>
<span class="fullScreen glyphicon glyphicon-fullscreen"></span>
<div class="volumeBar">
<div class="volumewrap">
<div class="progress">
<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 8px;height: 40%;"></div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
<br>
/*
������Ƶ�еĶ�����ʲô

�ϻ�  1
����  2
����è 3
����  4
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//����ѡ�����˳��  �ο���Ŀ FS ORD-319183-G6Y3- AirChina study 2018��China��-Wave2
//�˴����и����⣺ģ���еİ�ťͼƬ����ʾ���������д��Ż�

var $rows = [];
$("#E9_1_1,#E9_2_1,#E9_3_1,#E9_4_1,#E9_5_1,#E9_6_1,#E9_7_1").each(function(){ 
  $rows.push($(this).closest("tr").detach());
});

var order1 = "^f('hidShuffle').get()^";
var order = order1.split(",");

for(var i in order) {
  $(".confirmit-grid").append($rows[order[i]]);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Multi Grid��Ŀ ����ͬһҳ��Ķ�ѡ�⻥�� �ο���ĿFS ORD-326076-G9B6-Bain*Test* (p2944100)
$(".confirmit-table tbody").find("tr").click(function() {
  $(".confirmit-grid tbody").find("tr").each(function() {
    $(this).find(".gridcell").find("a").find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/checkboxred1.png");
    $(this).find(".gridcell").find("input[type=checkbox]").attr("checked",false);
    
  })
})

$(".confirmit-grid tbody").find("tr").each(function () {
  $(this).find(".gridcell").click(function() {
    $(".confirmit-table tbody").find("a").find("img").attr("src","//d2n88fe5uqdqty.cloudfront.net/ssicn/2017/template+20170912/checkboxred1.png");
    $(".confirmit-table tbody").find("input[type=checkbox]").attr("checked",false);
  })
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ɾ�������˵��е����һ��ѡ��
$("#Q2x6x1_7 option:last").remove();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DataBase Desiner:
/*
���Answer List�ǳ��ĳ���������Ҫ����ѡ�����߼�������ʹ��DataBase Desiner
���磺
��һ���ǳ�����car list����Ӧ��ͬ��price��
id  __l2052 __l2052Car  __l2052Price
1 Car 1 Car 1 $8394
2 Car 2 Car 2 $1617
3 Car 3 Car 3 $8982
4 Car 4 Car 4 $2160
5 Car 5 Car 5 $9809
6 Car 6 Car 6 $5851
7 Car 7 Car 7 $2086
8 Car 8 Car 8 $8087
9 Car 9 Car 9 $1043
10  Car 10  Car 10  $925
11  Car 11  Car 11  $811
12  Car 12  Car 12  $811
13  Car 13  Car 13  $4737
14  Car 14  Car 14  $4092
15  Car 15  Car 15  $989
16  Car 16  Car 16  $9990
17  Car 17  Car 17  $2305
18  Car 18  Car 18  $6065
19  Car 19  Car 19  $8313
20  Car 20  Car 20  $3798
21  Car 21  Car 21  $4287
22  Car 22  Car 22  $4583
23  Car 23  Car 23  $7312
24  Car 24  Car 24  $8106
25  Car 25  Car 25  $1861
26  Car 26  Car 26  $5848
27  Car 27  Car 27  $1826
28  Car 28  Car 28  $358
29  Car 29  Car 29  $2305
30  Car 30  Car 30  $2032
31  Car 31  Car 31  $6483
32  Car 32  Car 32  $9021
33  Car 33  Car 33  $57
34  Car 34  Car 34  $3036
35  Car 35  Car 35  $9859
36  Car 36  Car 36  $1501
37  Car 37  Car 37  $6547
38  Car 38  Car 38  $1161
39  Car 39  Car 39  $9489
40  Car 40  Car 40  $908
......

���HOMEѡ��������Ͻǵ��New Schema,ȡһ�����֣�������
���Tablesѡ������Add Table����һ���µı�񣬱���󣬵��Generate
Ȼ����Table ID�����·���Additional Columns�������Ҫ���У�������������Ҫ���Car ��Price���У��������
���Contentsѡ������Export,����table���еı�������
id  __l2052 __l2052Car  __l2052Price
�������������ʽ����Excel�н��������ã�����ΪText��Tab delimited��
���Upload from file�����ļ�����ϵͳ
��Desiner�У�����Ŀ��������������У���ĿΪDD��General�еĵ�Answers����ΪTable lookup��Ȼ����Answersѡ��У����Schema name��Table
����Ҫ����һ���л�ȡDDѡ��ĳ��͵�Price����Script�м�����룺
f('testprice').set(GetDBColumnValue(266,         984,  f('DD').toNumber(), 'Price'));
                   GetDBColumnValue(schema ID, Table ID, ID in database, 'Field you want to return')
���ɷ��س��Ͷ�Ӧ��Price�����������Խ�ʡ�ܶ�ʱ�䣬���Ҳ����׳��ִ��� 
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Set:
/*
Sets look like arrays, but a few of differences, 3 important ones below, 
the methods you can apply to them will be explained next...
1 Sets cannot contain duplicate entries
2 You cannot access elements in a set using index
3 You cannot sort elements in a set
If you require any of these things or want to convert your set into an array this can easily 
be done by var array = s.members();
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�������ʱ����
function startTime(section) {
 f("startTime")[section].set(new Date());
};

function endTime(section) {
 f("endTime")[section].set(new Date());
 f("totalTime")[section].set((new Date(f("endTime")[section]).valueOf()-new Date(f("startTime")[section]).valueOf())/1000);
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�����ⲻ������дȫ���֣�ȫ�ո���߳���С��2
//Error trap if all numeric response in OE question, all whitespace or less than 2 characters, function below...
function etrap() {
 var st : String = f(CurrentForm());
 st = st.replace(/ /g,'');

 if(!isNaN(st)||st.toString().length<2) {
  RaiseError();
  ClearErrorMessage();
  SetErrorMessage(CurrentLang(),"");
}  
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�����ⲻ������д��ͬ�Ĵ�
function uniqueResponse() {
  var cf = f(CurrentForm());
  var s = new Set();
  var arr = cf.get();
  var i : int;
  
  for(i=0;i<arr.length;i++) 
  {
    s.add(cf[arr[i]])
  }

  if(s.size()!=arr.length) {
    RaiseError();
    ClearErrorMessage();
    SetErrorMessage(CurrentLang(),"�������Ĵ�");
    

  };
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//�ж������ʽ�Ƿ���ȷ
if(!IsEmail(f(CurrentForm())))
{
  RaiseError();
  CLearErrorMessage();
  SetQuestionErrorMessage(CurrentLang(),"Please provide a valid email address.");
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ҳ����⣬˳����������ʼ�ճ����ڵ�һ˳λ����Ŀ��
//������Ŀ����ɼǵ����� &nbsp;����DOM�в���������
$(".text").first().html('Your additional text here');
//����
$(".text").first().html('Your additional text here<br /><br />'+$(".text").first().html());
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ͬҳ���ж��Grid�⣬����Scale��һ�£���ô���ƶ��˻������⣬���¹�����ʱ�򣬹̶���Scale��ʾ������
//����취�ο�FS ORD-326780-S2V5 Bain*Closed* (p2974311)  Question Skins  B8  ע�͵�����Scale�̶��Ĵ���
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Grid���Scale�������Ļ������ƶ�����ʾ��������������Ļ�ߴ�480���µ�ȥ������
//<style>
@media screen and (max-width:480px){

  #Q11_header0 {
    display:none;
    visibility: hidden;
  }

  .scalegroupheader {
    display: none;
    visibility: hidden;
  }
}
//</style>
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ʹ��random()��һ����Χ������������������߽�ֵ
function ourFunction(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourFunction(1, 9);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ɾ�������и�����Ԫ��
function remove(arr, item) {
  return arr.filter(function(x) { return x !== item; });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid �����˵�ѡ��ĳһֵ���ı������д�������ı��򲻿���д
$(".confirmit-grid tbody").find("tr").each(function() {
  if($(this).find("select").val() === "1")  {
    $(this).find("input.numberinput").attr("disabled",false);
  } else {
    $(this).find("input.numberinput").attr("disabled",true);  
  }
  
  var that = $(this);
  $(this).find("select").change(function() {
    if($(this).val() === "1") {
      that.find("input.numberinput").attr("disabled",false);
    }
    else {
      that.find("input.numberinput").attr("disabled",true);     
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ȥ��������ɫ
/*
<style>
td.confirmit-cellerror {
    background-color: #fff !important;
}
</style>
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid�⣬��һ���������˵�ѡ�Ƿ񣬵ڶ���������ֵ����һ��ѡ�ǣ��ڶ��п�����򲻿���
$(".confirmit-grid tbody").find("tr").each(function() {
  if($(this).find("select").val() === "1")  {
    $(this).find("input.numberinput").attr("disabled",false);
  } else {
    $(this).find("input.numberinput").attr("disabled",true);  
  }
  
  var that = $(this);
  $(this).find("select").change(function() {
    if($(this).val() === "1") {
      that.find("input.numberinput").attr("disabled",false);
    }
    else {
      that.find("input.numberinput").attr("disabled",true);     
    }
  });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//����ͬlist��������Ĵ𰸰������ϲ���һ�����1��Ӧ1�� 2��3��Ӧ2,4��Ӧ3,5��6��Ӧ4......
ClearForm(f('quotaOC'));
if(f('mainOC1') == '1' || f('mainOC2') == '1') {
  f('quotaOC')['1'].set('1');
}

var arr = [['1'], ['2', '3'], ['4'],['5', '6'], ['7'], ['8', '9'], ['13'], ['14', '15'], ['16'], ['17', '18'],
       ['19'], ['20', '21'], ['22'], ['23', '24'], ['26', '27'], ['37'], ['40'], ['58'], ['31'], ['35', '36'], ['47', '48'], ['53', '54']];

for(var i = 0; i < arr.length; i++) {
  for(var j = 0; j < arr[i].length; j++) {
    if(f('mainOC1') == arr[i][j] || f('mainOC2') == arr[i][j]) {
      f('quotaOC')[i+1].set('1');
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Loop�⣬��ѭ�������һ��ʱ��Loop��������ĳһ��ѡ���ʾ���ο���Ŀ  FS ORD-330356-F0T2 Bain*Live* (p3155960)

//��һ�������⣬��¼ѭ�������һ���code
var arr = f('Q9Hidden').get();
f('lastCode').set(arr[arr.length - 1]);
//����Ŀ��Masking��
f('l3').get() == f('lastCode').toNumber() ? a('Q16') : a('Q16').diff(set('98'))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//��ѡ����ѡ��� Globalģ��
$(".confirmit-table tbody").find("tr").eq(0).find("td").click(function() {
  $(".confirmit-table tbody").find("tr").eq(1).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
  $(".confirmit-table tbody").find("tr").eq(2).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
})

$(".confirmit-table tbody").find("tr").eq(1).find("td").click(function() {
  $(".confirmit-table tbody").find("tr").eq(0).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
  $(".confirmit-table tbody").find("tr").eq(2).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
})

$(".confirmit-table tbody").find("tr").eq(2).find("td").click(function() {
  $(".confirmit-table tbody").find("tr").eq(1).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
  $(".confirmit-table tbody").find("tr").eq(0).find("td").removeClass("abtn-selected selectedcolor multi-selected").find("input[type=checkbox]").attr("checked",false);
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ƥ�俪����Ͷ�ѡ���list �ο���ĿFS ORD-337220-Z9T8 Decathlon*Test* (p3478487)
//���Թ����з���ƥ�������Ǻ����룬���Ż�
ClearForm(f('A3'));

var arr = f('A3').domainValues();
var precodes = f('A1').domainValues();
for (var i = 0; i < arr.length; i++) {
  if(arr[i] != 99) {
    var labels = f('checkLabel')[arr[i]].label();
    var subtext = labels.split(" ");
    var precodes = f('A1').domainValues();
    for(var j = 0; j < precodes.length; j++) {
      var code = precodes[j];
      if (f('A1')[code].toBoolean()) {
        if (subtext.length ==2) {
          if(f('A1')[code].get().indexOf(subtext[0]) != -1) {
            f('A3')[arr[i]].set('1');
          }
          if(f('A1')[code].get().toUpperCase().indexOf(subtext[1].toUpperCase()) != -1) {
            f('A3')[arr[i]].set('1');
          }
        } else {
          if(f('A1')[code].get().indexOf(subtext[0]) != -1) {
            f('A3')[arr[i]].set('1');
          }
        } 
      }
      
      
      if (f('A2')[code].toBoolean()) {
        if (subtext.length ==2) {
          if(f('A2')[code].get().indexOf(subtext[0]) != -1) {
            f('A3')[arr[i]].set('1');
          }
          if(f('A2')[code].get().toUpperCase().indexOf(subtext[1].toUpperCase()) != -1) {
            f('A3')[arr[i]].set('1');
          }
        } else {
          if(f('A2')[code].get().indexOf(subtext[0]) != -1) {
            f('A3')[arr[i]].set('1');
          }
        } 
      }
       
    }
    
  }
  
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
//Global Grid Grid Global
/*
<div class="gridclick"><img class="img-responsive loading-container" style="margin: 40px auto;" src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/images/loading.gif" /><div class="gridclick-container" style="opacity: 0;"></div></div>

<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/gridclick/gridClick_v2.9.1.min.css">
<link rel="stylesheet" type="text/css" href="//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/fancybox/3.x.x/3.1.20/jquery.fancybox.css">
^jQueryToolColor("grid_click_new")^
<!-- add custom css here-->
<style>
div.pagearea.showcode-containter {
  max-width: 80% !important;
}
</style>
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/gridclick/ssi_ALLInOne_Confirmit_3.3.js"></script>
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/tools/gridclick/gridClick_v2.9.2.min.js"></script>
<script type="text/javascript" src="//d2n88fe5uqdqty.cloudfront.net/rnd/plugins/fancybox/3.x.x/3.1.20/jquery.fancybox.js"></script>

<script type="text/javascript">
$(function() {
var config = {
  sForm : getFormName(1), // form name of the grid
  sSplitter : '$', // splitter for images
  sOrientation : 'horizontal', // 'horizontal', 'vertical'
  sProgressSepText : ' / ', // separator text between item progress
  sTxtProgress : '', // text after progress text
  sForwardButton : '#forwardbutton',  // forward button jQuery selector - used for toggling the next button
  sOeDefaultHolder: '&#xf2bf;........', // default input placeholder when OEs are present
  sHideScaleType : 'keepAlignment', // method to hide the scales - 'keepAlignment', 'newAlignment'
        sDkScaleBgColor : '#E9ECEF', // background color for the DK scale
  iMinItemsRequired : null, // minimum answered items required to toggle the next button - default is null - all required
  iAnimationTime : 400, // animation time in ms
  iMaxContainerWidth : 1200, // maximum tool container width - can be used to enlarge/shrink the tool
  iVertItemContainPerc : 45, // vertical item container percentage width
        iVertItemContainMarginPerc : 5, // vertical item container percentage margin
  iFontSize : null, // font size for the tool container
  aDkScale : [99], // dk codes for scale - for example: [99,999]
  aOtherNotRequired : [], // other not required item codes - for example: [99,999]
  aOtherPlaceHolder : [], // other input custom placeholder - for example [{'98': 'Please specify'}, {'998': 'Specify'}] 
  aOtherOpenOptional: [], // other OE input not required - next button will be toggled without the need of OE input - scale can still be chosen - for example: [98, 998]
        aHideScaleCodes: [], // hide scales for specific codes [{98: [1,3]}, {1: [2,4]}]
  oElementConfig : { // element/item config object
    bImages : false, // images as options - using the splitter
    bShowLabel : true, // show labels for the options
    bShowOeImage : false, // if OE - should it show an image for the other option
    bZoomEnabled : false, // is zoom enabled
    sZoomImage : '//d2n88fe5uqdqty.cloudfront.net/rnd/tools/images/zoom_icon2.png', // zoom icon image path
    sZoomPosition : 'br', // position for the zoom icon - 'br', 'bl', 'tl'
    sImagePath : '', // path for the images to be used with the splitter
    sSmallImageExtension : '_S.jpg', // extension for the small image (default shown)
    sLargeImageExtension : '_L.jpg', // extension for the zoomed image
    iMaxImageWidth: 100, // maximum image width - needs to be lower than iWidth
    iMaxImageHeight: 100, // maximum image height - needs to be lower than iHeight
    iWidth : 130, // overall item container width
    iHeight : 100, // overall item container height
    iHorizontalSpacing : 15, // horizontal spacing between items
    iVerticalSpacing : 5, // vertical spacing between items
    iFontSize: null // font size for the item container
  },
  oScaleConfig : { // scale config object
    bImages : false, // images as options - using the splitter
    bShowLabel : true, // show labels for the options
    bZoomEnabled : false, // is zoom enabled
    sZoomImage : '//d2n88fe5uqdqty.cloudfront.net/rnd/tools/images/zoom_icon2.png', // zoom icon image path
    sZoomPosition : 'br', // position for the zoom icon - 'br', 'bl', 'tl'
    sImagePath : '', // path for the images to be used with the splitter
    sSmallImageExtension : '.png', // extension for the small image (default shown)
    sLargeImageExtension : '.png', // extension for the zoomed image
    iMaxImageWidth: 62, // maximum image width - needs to be lower than iWidth
    iMaxImageHeight: 62, // maximum image height - needs to be lower than iHeight
    iWidth : 80, // scale button width
    iHeight : 20, // scale button height
    iHorizontalSpacing : 10, // horizontal scale spacing
    iVerticalSpacing : 10, // vertical scale spacing
    iFontSize: null // font size for the scale container
  },
  oFancyBoxConfig : {}, // config for adding custom fancybox parameters - //fancyapps.com/fancybox/#docs
  bInvertItemScale : false, // invert the item/scale containers - top/bottom for horizontal, left/right for vertical 
  bHeightAuto : false, // make the items/scales have auto height for horizontal view - should not be used for vertical 
  bScaleNewLine: true, // make the scale in horizontal mode render vertically (one below the other) when not enough horizontal space for all scales
  bReverse : false, // reverse the direction of the items/navigation arrows
  bShowProgressText : false, // show the progress text progress
  bShowProgressIndicator :  true, // show the progress indicator
  bDisableNavigation : false, // disable navigation arrows - will only be allowed for multi or when no AutoNext item is false
  bAutoNextItem : true, // automatically go to next item when selected - working on multi only when DK scale is selected
  bAutoSubmit : false, // auto submit page when all items are answered
  bInitialNavigation : false, // initial navigation toggle
        bEnableNavAnswered : false, // Enable navigation for already answered items only. Not applicable when bDisableNavigation or bInitialNavigation is enabled. 
  bMultiple : false, // is the grid multiple
        bAutoSizeScales : false, //Automatically re-render scales to fit the width. Not applicable when bScaleNewLine is enabled or when oScaleConfig.iFirstLastWidth is set.
  bIsTest : true, // will make the tool warning appear as JavaScript alerts to make sure they are handled
  onStart : function() {
          if ($('.grid-group-header-label').length) $('.grid-group-header-label').parent().remove();
          if ($('.scale-group-header').length) $('.scale-group-header').parent().remove();
        }, // function called before the tool starts generating
  onAnswer : function(e) {}, // function called when an answer is given (click on scale)
  onInput : function(e) {}, // function called on OE input (item)
  onCompleted : function() {}, // function called when all items are answered (unless OE not required codes are defined) before next button is toggled
  onReady : function() {}, // function called after tool is fully loaded
}

$('body').gridClick(config);

var toolId;toolId=config.bMultiple?config.oElementConfig.bImages?"jMGTI001":"jMGTT001":config.oElementConfig.bImages?"jGTI001":"jGTT001";

countIt({
  "tool-id" : toolId, 
  "project-id"  :  "^CurrentPID()^",
  "order-id"  :  "^getOrderID()^"
});
});
</script>
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//�������ֹΪ��
function validateOpen(qid) {
  if(qid.toBoolean()){
    var tt=qid.toString();
    var TT=tt.Trim();
    if(TT=="") {
      if(f('l').get()==9){
          RaiseError();
          ClearErrorMessage();
          SetQuestionErrorMessage(CurrentLang(), "The input should not be empty��");
         }else{
          RaiseError();
          ClearErrorMessage();
          SetQuestionErrorMessage(CurrentLang(), "��ע�⣬�ı�������Ϊ�գ�������Ӧ��Ŀ��������Ӧ�𰸡�");
         }
    }
  }
}


function validateOpenList(qid) {
  if(qid.toBoolean()) {
      var precodes=qid.domainValues();
      for(var i=0;i<precodes.length;i++){
      var code=precodes[i];
      if (qid[code].toBoolean()) {
         if(qid[code].toString().Trim().length==0) { 
          if(f('l').get()==9){
           RaiseError();
           ClearErrorMessage();
           SetQuestionErrorMessage(CurrentLang(), "The input should not be empty��");
          } else {
           RaiseError();
           ClearErrorMessage();
           SetQuestionErrorMessage(CurrentLang(), "��ע�⣬�ı�������Ϊ�գ�������Ӧ��Ŀ��������Ӧ�𰸡�");
          }
        }
      }
        
     }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//��ѯ���ݿ���ĳһ���Ƿ�����ͬ�����ݣ�����绰���룬����ֵ�ǲ���ֵ��true����false
isFieldValueTaken('V3B_1', f('V3B_1').get())
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//�����ⲻҪʹ��Globalģ���������Ч������Ȧ����ֵ���������û������
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//texthighlighting ��������� �ı䡰���Ͻ��ޡ���ť��ʽ
// ���ư�ť��ʽ�� ^jQueryToolColor("text_highlighting")^��
// �����滻��<link rel="stylesheet" type="text/css" href="/isa/PYAMLMFAKKOYIBEYNHKRJRBIMIEALXOH/339612/typeCSS.css"/>
// �ο���Ŀ
//FS ORD-339612-Y4K1-For Client*Test* (p3590458)
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//texthighlighting ��������� ͬҳ���п����⣬�����б�����ʾ��������ˢ��ҳ�����ѡ���������ã����´����ֹ�����ⷢ��

$(".confirmit-grid tbody").find("tr").each(function(index) {
  if($(this).find("input").is(":checked")) {
      $("span#" + (index + 1)).css({"background-color":"#006838","color":"#fff"});
      $("#forwardbutton2").css("visibility", "visible");
  } else {
      $("span#" + (index + 1)).css({"background-color":"#fff","color":"#000"});
      
  }
})

$("#target").find("span").each(function() {
  $(this).click(function() {
      $(".confirmit-grid tbody").find("tr").each(function(index) {
          if($(this).find("input").is(":checked")) {
              $("span#" + (index + 1)).css({"background-color":"#006838","color":"#fff"});
              $("#forwardbutton2").css("visibility", "visible");
          } else {
              $("span#" + (index + 1)).css({"background-color":"#fff","color":"#000"});
              
          }
      })
  })
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//3D Grid ����֮ǰ��Ŀ�Ĵ𰸣���ʾ��Ӧ���ı���
$('input[type="text"]').hide();

var arr1="^f('Q17HID_1').get()^";
//console.log("arr1", arr1);
arr1=arr1.split(",");
var arr2="^f('Q17HID_2').get()^";
//console.log("arr2", arr2);
arr2=arr2.split(",");
var arr3="^f('Q17HID_3').get()^";
//console.log("arr3", arr3);
arr3=arr3.split(",");

//console.log(arr1, arr2, arr3)

$.each(arr1,function(index,value){
	//console.log("index", index, "value", value);
  $("#Q19x1_"+arr1[index]).show();
  $("#Q19x1_"+arr1[index]).after("����");
});

$.each(arr2,function(index,value){
	//console.log("index", index, "value", value);
  $("#Q19x2_"+arr2[index]).show();
  $("#Q19x2_"+arr2[index]).after("����");
});

$.each(arr3,function(index,value){
//	console.log("index", index, "value", value);
  $("#Q19x3_"+arr3[index]).show();
  $("#Q19x3_"+arr3[index]).after("����");
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////

