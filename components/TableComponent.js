import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

const TableComponent = () => {
  //   const [page, setPage] = useState(0);
  //   const [itemsPerPage, setItemsPerPage] = ReactuseState(optionsPerPage[0]);

  //   React.useEffect(() => {
  //     setPage(0);
  //   }, [itemsPerPage]);

  return (
    <DataTable style={styles.Tablecontainer}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Favourite Food</DataTable.Title>
        <DataTable.Title>Age</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>Radhika</DataTable.Cell>
        <DataTable.Cell>Dosa</DataTable.Cell>
        <DataTable.Cell>23</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Krishna</DataTable.Cell>
        <DataTable.Cell>Uttapam</DataTable.Cell>
        <DataTable.Cell>26</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Vanshika</DataTable.Cell>
        <DataTable.Cell>Brownie</DataTable.Cell>
        <DataTable.Cell>20</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell>Teena</DataTable.Cell>
        <DataTable.Cell>Pizza</DataTable.Cell>
        <DataTable.Cell>24</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default TableComponent;

const styles = StyleSheet.create({
  Tablecontainer: {
    paddingTop: 15,
    height: 100,
    width: 300,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
});
