import React, {Component} from 'react';
import {View,Text,FlatList,Image,Alert} from 'react-native';

class App extends Component {
  data=[{
    id:1,
    country:"Bangladesh",
    city:"Dhaka",
    img:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_1280.jpg"
  },
    {
      id:2,
      country:"India",
      city:"Delli",
      img:"https://cdn.pixabay.com/photo/2019/09/26/14/04/etretat-4506072__480.jpg"
    },
    {
      id:3,
      country:"Pakistan",
      city:"Dhak",
      img: "https://cdn.pixabay.com/photo/2020/04/28/10/34/sea-5103840__480.jpg"
    },
    {
      id:4,
      country:"karachi",
      city:"islmabad",
      img:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_1280.jpg"
    },
    {
      id:5,
      country:"Bangladesh",
      city:"Dhaka",
      img:"https://cdn.pixabay.com/photo/2019/09/26/14/04/etretat-4506072__480.jpg"
    },
    {
      id:6,
      country:"Bangladesh",
      city:"Dhaka",
      img: "https://cdn.pixabay.com/photo/2020/04/28/10/34/sea-5103840__480.jpg"
    },
    {
      id:7,
      country:"Bangladesh",
      city:"Dhaka",
      img:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_1280.jpg"
    },
    {
      id:8,
      country:"India",
      city:"Delli",
      img:"https://cdn.pixabay.com/photo/2019/09/26/14/04/etretat-4506072__480.jpg"
    },
    {
      id:9,
      country:"Pakistan",
      city:"Dhak",
      img:"https://cdn.pixabay.com/photo/2019/09/26/14/04/etretat-4506072__480.jpg"
    },
    {
      id:10,
      country:"karachi",
      city:"islmabad",
      img:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_1280.jpg"
    },
    {
      id:11,
      country:"Bangladesh",
      city:"Dhaka",
      img:"https://cdn.pixabay.com/photo/2020/02/11/11/53/poppies-4839317_1280.jpg"
    },
    {
      id:12,
      country:"Bangladesh",
      city:"Dhaka",
      img: "https://cdn.pixabay.com/photo/2020/04/28/10/34/sea-5103840__480.jpg"
    },
    {
      id:13,
      country:"Bangladesh",
      city:"Dhaka",
      img: "https://cdn.pixabay.com/photo/2020/04/28/10/34/sea-5103840__480.jpg"
    }
  ];
  OnClikitem=(AlertCountry)=>{
    Alert.alert(AlertCountry);

  }
  ChildView=({Childcountry,Childcity,img})=>{
    return(
        //Vertical ListView
        // <View style={{backgroundColor:'white',margin:10,padding:10,flexDirection:'row',flex:100}}>
        //   <View style={{flex:30}}>
        //     <Image style={{height:70,width:"100%"}} source={{uri:img}}/>
        //   </View>
        //   <View style={{flex:70,padding:10}}>
        //     <Text onPress={this.OnClikitem.bind(this,Childcountry)} style={{color:'black',fontSize:18}}>{Childcountry}</Text>
        //     <Text style={{color:'green',fontSize:12}}>{Childcity}</Text>
        //   </View>
        // </View>

        //Horizental ListView
        // <View style={{backgroundColor:'red',width:'50%',height:200,margin:2, padding:15,flexDirection:'column'}}>
        //   <View>
        //     <Image style={{height:90,width:"100%"}} source={{uri:img}}/>
        //   </View>
        //   <View style={{padding:10,backgroundColor:'white'}}>
        //     <Text onPress={this.OnClikitem.bind(this,Childcountry)} style={{color:'black',fontSize:18}}>{Childcountry}</Text>
        //     <Text style={{color:'green',fontSize:12}}>{Childcity}</Text>
        //   </View>
        // </View>

        //Horizental GridView
        <View style={{backgroundColor:'white',width:"50%",height:200,margin:2, padding:15,flexDirection:'column'}}>
          <View>
            <Image style={{height:90,width:"100%"}} source={{uri:img}}/>
          </View>
          <View style={{padding:10}}>
            <Text onPress={this.OnClikitem.bind(this,Childcountry)} style={{color:'black',fontSize:18}}>{Childcountry}</Text>
            <Text style={{color:'green',fontSize:12}}>{Childcity}</Text>
          </View>
        </View>
    );
  }
  render() {
    return (
        // ListViewShow
        // <View>
        //
        //   <FlatList horizontal={false} data={this.data} renderItem={({item})=><this.ChildView Childcountry={item.country} Childcity={item.city} img={item.img} />}/>
        //
        // </View>

        //GridViewShow
        <View>

          <FlatList keyExtract={item=>item.id}  numColumns={2} horizontal={false} data={this.data} renderItem={({item})=><this.ChildView Childcountry={item.country} Childcity={item.city} img={item.img} />}/>

        </View>
    );
  }
}

export default App;
