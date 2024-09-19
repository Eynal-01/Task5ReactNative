import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    position: "relative",
    marginTop: "6%",
    width: "90%",
    marginLeft: "4.7%",
    alignItems: "center", // Center the content horizontally
  },
  container: {
    flexDirection: "column", // Changed to column
    margin: 12,
    position: "static",
  },
  content: {
    width: "73%",
    marginLeft: "20%",
    fontWeight: "400",
  },
  content2: {
    width: "90%",
    marginLeft: "1%",
    fontWeight: "400",
    alignSelf: "flex-start",
  },
  image1: {
    width: "98%",
    height: 280,
    borderRadius: 10,
    backgroundColor: "rgb(246, 246, 246)",
    marginBottom: 10,
  },
  image2: {
    width: "98%",
    height: 280,
    borderRadius: 10,
    backgroundColor: "rgb(246, 246, 246)",
    marginTop: "5%", // Add space between the image and title
  },
  title2: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 19,
    marginBottom: 5, // Add some margin below the title
    alignSelf: "flex-start",
    marginLeft: "1%",
  },
  imageContainer: {
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    width: 60,
    height: 60,
    marginRight: 1,
    marginTop: 15,
    position: "absolute",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 19,
  },
  minute: {
    color: "rgb(189, 189, 189)",
  },
  minute2: {
    position: "static",
    alignItems: "flex-start",
    color: "rgb(189, 189, 189)",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginTop: "1%",
    marginLeft: "1%",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    margin: 26,
    marginTop: 60,
    height: "7%",
  },
  topContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginBottom: 8,
    // margin: 26,
    // marginTop: 60,
    height: "40%",
    backgroundColor: "rgb(93, 176, 117)",
    width: "100%",
  },
  searchbar: {
    width: 390,
    height: 50,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgb(232, 232, 232)",
    borderRadius: 100,
    backgroundColor: "rgb(246, 246, 246)",
    padding: 10,
    color: "gray",
    paddingLeft: 20,
  },
  search: {
    marginTop: 60,
    position: "relative",
    width: 363,
  },
  topContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    margin: 16,
    marginLeft: "20%",
  },
  back: {
    position: "absolute",
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    textAlign: "left",
    width: 70,
    height: 25,
    marginTop: 8,
  },
  back2: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlign: "left",
    width: 38,
    height: 19,
    marginTop: "10%",
    marginLeft: "7%"
  },
  filter: {
    marginTop: 8,
    position: "absolute",
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    textAlign: "right",
    left: "82%",
    width: 60,
    height: 30,
  },
  feed: {
    position: "absolute",
    fontSize: 34,
    fontWeight: "600",
    textAlign: "center",
    width: 101,
    height: 50,
    left: "37%",
    color:"white",
  },
  cont: {
    position: "absolute",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    width: 118,
    height: 36,
    left: "35%",
  },
  cont2: {
    position: "absolute",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    width: 118,
    height: 36,
    left: "35%",
    color: "white",
    marginTop: "7%",
  },
  blank: {
    position: "absolute",
    width: 343,
    height: 227.98,
    borderRadius: 10,
    marginTop: "147%",
    backgroundColor: "rgb(240, 240, 240)",
    alignSelf: "center",
  },
  footer: {
    position: "absolute",
    width: "100%",
    height: 83,
    backgroundColor: "rgb(250, 250, 250)",
    alignSelf: "center",
    marginTop: "190%",
  },
  footer2: {
    position: "absolute",
    width: "100%",
    height: 83,
    backgroundColor: "rgb(250, 250, 250)",
    alignSelf: "center",
    marginTop: "193%",
  },
  icon: {
    position: "absolute",
    width: 32,
    height: 32,
    left: "8%",
    top: 15,
    backgroundColor: "rgb(93, 176, 117)",
    borderRadius: 100,
  },
  icon1: {
    position: "absolute",
    width: 32,
    height: 32,
    left: "27%",
    top: 15,
    backgroundColor: "rgb(232, 232, 232)",
    borderRadius: 100,
  },
  icon2: {
    position: "absolute",
    width: 32,
    height: 32,
    left: "46%",
    top: 15,
    backgroundColor: "rgb(232, 232, 232)",
    borderRadius: 100,
  },
  icon3: {
    position: "absolute",
    width: 32,
    height: 32,
    left: "65%",
    top: 15,
    backgroundColor: "rgb(232, 232, 232)",
    borderRadius: 100,
  },
  icon4: {
    position: "absolute",
    width: 32,
    height: 32,
    left: "85%",
    top: 15,
    backgroundColor: "rgb(232, 232, 232)",
    borderRadius: 100,
  },
  circleContainer: {
    position: "static",
    width: 40,
    height: 8,
    alignSelf: "flex-end",
    marginTop: "5%",
    marginRight: "2%",
  },
  circle: {
    position: "absolute",
    width: 8,
    height: 8,
    backgroundColor: "rgb(93, 176, 117)",
    borderRadius: 100,
  },
  circle2: {
    position: "absolute",
    width: 8,
    height: 8,
    marginLeft: "40%",
    backgroundColor: "rgb(232, 232, 232)",
    borderRadius: 100,
  },
  circle3: {
    position: "absolute",
    width: 8,
    height: 8,
    marginLeft: "80%",
    backgroundColor: "rgb(232, 232, 232)",
    borderRadius: 100,
  },
  containerMarket: {
    position: "absolute",
  },
  deal: {
    position: "relative",
    width: 150,
    height: 227,
    marginTop: "47%",
    marginLeft: "2%",
  },
  dealImage: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: "rgb(246, 246, 246)",
  },
  dealText: {
    position: "absolute",
    fontSize: 17,
    marginTop: "105%",
    // fontWeight:400
  },
  dealCost: {
    position: "absolute",
    fontSize: 15,
    // fontWeight:600,
    marginTop: "140%",
  },
  video: {
    width: "70%",
    height: "50%",
    borderRadius: 10,
    backgroundColor: "rgb(246, 246, 246)",
    alignSelf:"center",
    marginLeft:"15%",
    marginBottom:"-15%"
  },
  headerCont:{
    position:"absolute",
    width:"100%",
    height:270,
    backgroundColor:"rgb(93, 176, 117)"
  },
  wordCont:{
    position:"absolute",
    width:400,
    height:100,
    marginTop:30,
    margin:"auto",
    padding:10,
    marginLeft:15,
  },
  imgCont: {
    borderRadius: 100,
    width: 170,
    height: 170,
    top: 110,
    margin: "auto",
    marginRight: 110,
    backgroundColor: "white",
    elevation: 10, 
   },
   image:{
    borderRadius: 100,
    width: 163,
    height: 163,
    margin: "auto",
   },
   image3:{
    borderRadius: 10,
    width: "100%",
    height: "100%",
    margin: "auto",
   },
   toggleCont: {
    width: 370,
    height: 60,
    borderRadius: 100,
    top: 220,
    backgroundColor: "rgb(246, 246, 246)",
    margin: "auto",
    alignItems: "center",
    padding: 3,
    justifyContent: 'center'
  },
  toggle: {
    flexDirection: 'row',
    width: 364,
    height: 54,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  toggleButton: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  activeButton: {
    backgroundColor: 'rgb(93, 176, 117)',
  },
  togText: {
    fontSize: 17,
    color: 'rgb(189, 189, 189)',
    fontWeight: '600',
  },
  activeText: {
    color: 'white',
  },
   infoCont:{
    margin:"auto",
    width:"80%",
    height:100,
    top:"45%"
   },
   name:{
    fontSize:30,
    margin:"auto",
    fontWeight:"700",
   },
   info:{
    fontSize:16,
    margin:"auto",
    fontWeight:"600",
    marginBottom:20
   },
   rateCont:{
    width:"100%",
    height:"100%",
    backgroundColor:"rgb(93, 176, 117)",
   },
   wCont:{
    margin:"auto",
    width:"90%",
    height:470,
    backgroundColor:"white",
    borderRadius:10,
    padding:30
   },
   starCont:{
    width:"80%",
    backgroundColor:"red",
    height:50,
    margin:"auto"
   },
   headTxt:{
    fontSize:35,
    fontWeight:"600",
    margin:"auto"
   },
   appInfo:{
    fontSize:17,
    fontWeight:"400",
    margin:"auto",
    textAlign:"center"
   },
   likeApp:{
    textAlign:"center",
    fontSize:17,
    width:320,
    height:55,
    backgroundColor:"rgb(93, 176, 117)",
    borderRadius:30,
    margin:"auto",
    marginLeft:-5,
    paddingTop:15,
    color:"white"
   },
   dont:{
    width:320,
    height:20,
    color:"rgb(93, 176, 117)",
    fontSize:17,
    fontWeight:600,
    textAlign:"center",
    margin:"auto",
    left:60
   },
   container123: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginTop:300
  },
  openButton: {
    backgroundColor: 'rgb(93, 176, 117)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    height:50
  },
  openButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Aligns content to the bottom of the screen
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  moduleContent: {
    alignContent:"center",
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,  // Rounded corners at the top of the modal
    borderTopRightRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
  },
  drawerHeader: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    margin:"auto"
  },
  subHeaderText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6c757d',
    width:300
  },
  primaryButton: {
    backgroundColor: 'rgb(93, 176, 117)',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    paddingVertical: 10,
  },
  secondaryButtonText: {
    color: 'rgb(93, 176, 117)',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});