import React, { useState, Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
/*import CheckBox from '@react-native-community/checkbox';*/
import { Table, Row, Rows, Cols, Col, TableWrapper } from 'react-native-table-component';


export default class TableOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead1: ['', '0', '1', '2', '3', '4'],

      tableTitle: ['Fatigue', 'Nausea', 'Constipation', 'Vomiting', 'Headache', 'Decreased \n appetite', 'Not able to sleep', 'Abdominal pain'],
      tableCol1:['1','1', '1','1', '1','1', '1','1'],
      tableCol2: ['1','1', '1','1', '1','1', '1','1'],
      tableCol3: ['1','1', '1','1', '1','1', '1','1'],
      tableCol4: ['1','1', '1','1', '1','1', '1','1'],
      tableCol5: ['1','1', '1','1', '1','1', '1','1'],

      tableHead2: ['', '0', '1', '2', '3', '4'],
      tableCol6: ['Severity', 'None', 'Mild', "Mild-to-moderate", 'Moderate-to-severe', 'Severe']
    }
  }
  
  render() {
    
    const state = this.state;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Adverse Event Log</Text>
          </View>
          <View>
            <Table style={styles.bottom} borderStyle={{ borderWidth: 1, borderColor: '#d9d9d9' }}>
            <TableWrapper style={styles.wrapper}>
              <Col data={state.tableHead2} style={styles.head2} heightArr={[30, 35,35, 35, 35, 35]} textStyle={styles.text1}/>
              <Col data={state.tableCol6} style={styles.col6} heightArr={[30, 35,35,35, 35, 35]} textStyle={styles.text1}/>
            </TableWrapper>
            </Table>
          </View>
          <View>
            <Text style={styles.date}>Date: {month}/{date}/{year}</Text>
          </View>
          
            <Table borderStyle={{ borderWidth: 1, borderColor: 'white' }}>
                <Row data={state.tableHead1} flexArr={[2.3,1,1,1,1,1]} style={styles.head} textStyle={styles.headText} />
                <TableWrapper style={styles.wrapper}>
                  <Col data={state.tableTitle} style={styles.symptoms} heightArr={[40,40, 40,40, 40,60, 60,60]} textStyle={styles.text}/>
                  <Col data={state.tableCol1} style={styles.col1} heightArr={[40,40, 40,40, 40,60, 60,60]} textStyle={styles.text}/>
                  <Col data={state.tableCol2} style={styles.col2} heightArr={[40,40, 40,40, 40,60, 60,60]} textStyle={styles.text}/>
                  <Col data={state.tableCol3} style={styles.col3} heightArr={[40,40, 40,40, 40,60, 60,60]} textStyle={styles.text}/>
                  <Col data={state.tableCol4} style={styles.col4} heightArr={[40,40, 40,40, 40,60, 60,60]} textStyle={styles.text}/>
                  <Col data={state.tableCol5} style={styles.col5} heightArr={[40,40, 40,40, 40,60, 60,60]} textStyle={styles.text}/>
                </TableWrapper>
            </Table>
        </View>
      </ScrollView>
    )
}
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 9.7, justifyContent: 'center', backgroundColor: '#fff', marginBottom: 50 },
  head: { height: 50, backgroundColor: '#75975e' },
  head2: {backgroundColor:'white', flex: 0.25},
  col1: { backgroundColor: '#c7ddb5' },
  col2: { backgroundColor: '#b3cf99' },
  col3: { backgroundColor: '#a3c585' },
  col4: { backgroundColor: '#95bb72' },
  col5: { backgroundColor: '#87ab69' },
  col6: {backgroundColor:'white'},
  wrapper: { flexDirection: 'row'},
  symptoms: { backgroundColor: '#ddead1', textAlign: 'center', flex: 2.3},
  headText: { fontSize: 20, fontWeight: 'bold' , textAlign: 'center', color: 'white' },
  text1: { margin: 6, fontSize: 11, fontWeight: 'medium' , textAlign: 'center', color: 'black'},
  text: { margin: 6, fontSize: 16, fontWeight: 'medium' , textAlign: 'center', color: 'black'},
  title: {
    fontWeight: "bold",
    height: 30,
    fontSize: 27,
    alignItems: "center",
    bottom: 5,
    marginBottom: 30,
    marginTop: 130,
    textAlign: "center"
  },
  date: {
    fontWeight: "bold",
    height: 30,
    fontSize: 16,
    alignItems: "center",
    textAlign: "left",
    marginLeft: 5
  },
  description: {
    fontWeight: "medium",
    height: 30,
    fontSize: 17,
    alignItems: "left",
    marginLeft: 30
  },
  descriptionB: {
    fontWeight: "medium",
    height: 30,
    fontSize: 17,
    alignItems: "left",
    marginLeft: 30,
    marginBottom:13
  },
  bottom: {
    marginBottom: 35,
    marginLeft: 75,
    marginRight: 75,
  }
})
