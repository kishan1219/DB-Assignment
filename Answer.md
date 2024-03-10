Q.1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

Ans - The relationship between the "Product" and "Product Category" entities in the diagram is likely one-to-many. This means that a single product 
category can have many products associated with it, but a product can only belong to one category.

Q.2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

Ans. - There are a couple of ways to ensure that each product in the "Product" table has a valid category assigned to it:

Database Constraints: You can set up a foreign key constraint on the "Category ID" column in the "Product" table. This constraint would enforce referential integrity, meaning that the value in the "Category ID" column must exist as a primary key in the "Product Category" table.

Application Logic:  You can implement logic within your application to validate the category ID before assigning it to a product. This could involve checking if the category ID exists in the "Product Category" table before allowing the product to be saved.
