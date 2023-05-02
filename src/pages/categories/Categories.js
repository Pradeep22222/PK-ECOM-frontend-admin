import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { CategoryTable } from "../../components/categoryTable/CategoryTable";
import { AddCatForm } from "../../components/categoryForm/AddCatForm";

const Categories = () => {
  return <AdminLayout>
    <h2>Categories management</h2>
    {/* form */}
<AddCatForm></AddCatForm>

    {/* table */}
    <CategoryTable></CategoryTable>
  </AdminLayout>;
};

export default Categories;
