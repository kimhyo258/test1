function serch_info_click(){
  var data = document.getElementsByName("drug_info_type");
  var string = "";

  for(var i = 0; i < data.length; i++){
    if(data[i].checked == true){
      string += "type=" + data[i].value + "&";
    }
  }

  var drug_info_url = "http://act.hoseo.ac.kr/hosmed/getdruginfo?";
  drug_info_url += string;

  var drug_name = document.getElementById('input_drug_name').value;
  drug_info_url += "drug_name=" + drug_name;

  //'http://act.hoseo.ac.kr/hosmed/getdruginfo?type=toxic&drug_name=이소자이드'
  request(drug_info_url, 'GET', function(resp) { resp_sort(resp, function(sorted_resp) { display_drug_info(sorted_resp) }); });
};

function resp_sort(resp, display_drug_info){
  console.log(resp);
  var sorted_resp = resp.split('\n');
  for(var i = 1; i < sorted_resp.length; i++){
    sorted_resp[i] = sorted_resp[i].split('////');
  }
  display_drug_info(sorted_resp);
};

function display_drug_info(sorted_resp){
  console.log(sorted_resp);
  var table_frame = document.getElementById('tables');
  var string1="<table border='1'>";
  var string2=""
  table_frame.innerHTML="";
  for(var i = 1; i < sorted_resp.length-1; i++){
    string1 += "<tr>";
    for(var j = 0; j < sorted_resp[1].length; j++){
      string1 += "<td>" + sorted_resp[i][j];
    }
    string2+=string1;
    string1="";
  }
  table_frame.innerHTML += string2;
}
