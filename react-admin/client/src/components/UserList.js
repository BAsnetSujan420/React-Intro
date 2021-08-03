import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  EmailField,
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <EmailField source="email" />
        <EditButton basepath="/users" />
        <DeleteButton basepath="/users" />
      </Datagrid>
    </List>
  );
};

export default UserList;
