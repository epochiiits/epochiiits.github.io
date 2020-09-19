import 'dart:convert';
import 'package:http/http.dart';
import 'package:intl/intl.dart';


class WorldTime{

  String location; // location name for ui
  String time; // time in that location
  String flag; //url to an asset flag icon
  String url; //location url for api endpoint
  bool isDayTIme;// true or false  to check if it is day time or not

  WorldTime({this.location,this.flag, this.url});

  Future<void> getTIme() async{

    //get request
    Response response= await get('http://worldtimeapi.org/api/timezone/$url');
    Map data= jsonDecode(response.body);

    //get properties from data
    String datetime=data['datetime'];
    String offset=data['utc_offset'].substring(1,3);


    //create date time object
    DateTime now= DateTime.parse(datetime);
    now=now.add(Duration(hours: int.parse(offset)));


    //to check if it is daytime or night time
    isDayTIme = now.hour>6 && now.hour< 19 ? true: false;


    //set the time property
    time = DateFormat.jm().format(now);




  }

}

