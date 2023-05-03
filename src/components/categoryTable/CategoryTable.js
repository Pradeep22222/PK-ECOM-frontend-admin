import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../pages/categories/categoryAction";
import { Button, Row, Table } from "react-bootstrap";

export const CategoryTable = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);
  const parentCats = categories.filter(({ parentId }) => !parentId)
  const childCats = categories.filter(({ parentId }) => parentId);
  
  return (
    <Row>
      <Table stripped="true" hover bordered>
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parentCats.length > 0 &&
            parentCats.map((item, i) => (
              <>
                <tr key={item._id} className="bg-warning">
                  <td>{item.status}</td>
                  <td>{item.name}</td>
                  <td>{item.parentId ? "children" : "parent"}</td>
                  <td>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
                {childCats.map(
                  (cat) =>
                    cat.parentId === item._id && (
                      <tr key={cat._id} calssName="bg-warning">
                        <td>{cat.status}</td>
                        <td>{cat.name}</td>
                        <td>{cat.parentId ? "children" : "parent"}</td>
                        <td>
                          <Button variant="danger">Delete</Button>
                        </td>
                      </tr>
                    )
                )}
              </>
            ))}
        </tbody>
      </Table>
    </Row>
  );
};
