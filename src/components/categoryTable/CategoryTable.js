import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../pages/categories/categoryAction";
import { Button, Row, Table } from "react-bootstrap";
import { EditCatForm } from "../categoryForm/EditCatForm";
import { setModalShow } from "../../pages/system-state/systemSlice";

export const CategoryTable = () => {
  const [selectedCat, setSelectedCat] = useState({});
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategoriesAction());
  }, [dispatch]);

  const handleOnEdit = (cat) => {
    setSelectedCat(cat);
    dispatch(setModalShow())
  };
  const parentCats = categories.filter(({ parentId }) => !parentId);
  const childCats = categories.filter(({ parentId }) => parentId);
  return (
    <Row>
      <EditCatForm selectedCat={selectedCat}></EditCatForm>
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
                <tr ey={item._id} className="bg-info">
                  <td
                    className={
                      item.status === "active" ? "text-success" : "text-danger"
                    }
                  >
                    {item.status}
                  </td>
                  <td>{item.name}</td>
                  <td>{item.parentId ? "children" : "parent"}</td>
                  <td>
                    <Button variant="danger">Delete</Button>{" "}
                    <Button
                      variant="warning"
                      onClick={() => handleOnEdit(item)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
                {childCats.map(
                  (cat) =>
                    cat.parentId === item._id && (
                      <tr key={cat._id}>
                        <td
                          className={
                            cat.status === "active"
                              ? "text-success"
                              : "text-danger"
                          }
                        >
                          {cat.status}
                        </td>
                        <td>{cat.name}</td>
                        <td>{cat.parentId ? "children" : "parent"}</td>
                        <td>
                          <Button variant="danger">Delete</Button>{" "}
                          <Button
                            variant="warning"
                            onClick={() => handleOnEdit(cat)}
                          >
                            Edit
                          </Button>
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
