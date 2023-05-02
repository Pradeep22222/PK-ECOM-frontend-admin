import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesAction } from '../../pages/categories/categoryAction'
import { Button, Row, Table } from 'react-bootstrap'

export const CategoryTable = () => {
  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.categories);
    useEffect(() => {
        dispatch(getCategoriesAction());
    },[])
  return (
    <Row>
      <Table stripped hover bordered>
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 &&
            categories.map((item, i) => (
              <tr>
                <td>{item.status}</td>
                <td>{item.name}</td>
                <td>{item.parentId?"children":"parent"}</td>
                <td>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Row>
  );
  
}
