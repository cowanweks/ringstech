import { Header } from '@sections/Header';
import React from 'react';
import { Input } from "@shadcn-ui/input"
import { Label } from "@shadcn-ui/label"
import { Button } from "@shadcn-ui/button"
import { API_URL } from "@utils/index"



const ProductForm: React.FC = () => {


  return (
    <div className='flex flex-col items-center py-24'>

      <h1>Product Registration Form</h1>

      <form method='POST' action={`${API_URL}/products`} onSubmit={() => {
        // e.preventDefault()
      }} encType='multipart/form-data' className="grid gap-4 py-4 w-[30rem]">
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              Product Name
            </Label>
            <br />
          </div>
          <Input
            type="text"
            id="productName"
            name="product_name"
            className="col-span-3"
          />
        </>
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              Unit Price
            </Label>
            <br />
          </div>
          <Input
            type="number"
            id="unitPrice"
            name="product_unit_price"
            className="col-span-3"
          />
        </>
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              Quantity in Stock
            </Label>
            <br />
          </div>
          <Input
            type="number"
            id="inStock"
            name="in_stock"
            className="col-span-3"
          />
        </>
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              Brand
            </Label>
            <br />
          </div>
          <Input
            type="text"
            id="brand"
            name="brand"
            className="col-span-3"
          />
        </>
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              Battery
            </Label>
            <br />
          </div>
          <Input
            type="text"
            id="battery"
            name="battery"
            className="col-span-3"
          />
        </>
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              Category
            </Label>
            <br />
          </div>
          <Input
            type="text"
            id="productCategory"
            name="product_category"
            className="col-span-3"
          />
        </>
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              Cameras
            </Label>
            <br />
          </div>
          <Input
            type="text"
            id="cameras"
            name="cameras"
            className="col-span-3"
          />
        </>
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              Processor
            </Label>
            <br />
          </div>
          <Input
            type="text"
            id="processor"
            name="processor"
            className="col-span-3"
          />
        </>
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              RAM
            </Label>
            <br />
          </div>
          <Input
            type="text"
            id="ram"
            name="ram"
            className="col-span-3"
          />
        </>
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              ROM
            </Label>
            <br />
          </div>
          <Input
            type="text"
            id="rom"
            name="rom"
            className="col-span-3"
          />
        </>
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              Dispay
            </Label>
            <br />
          </div>
          <Input
            type="text"
            id="display"
            name="display"
            className="col-span-3"
          />
        </>
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              Available Colors
            </Label>
            <br />
          </div>
          <Input
            type="text"
            id="availableColors"
            name="available_colors"
            className="col-span-3"
          />
        </>
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              description
            </Label>
            <br />
          </div>
          <Input
            type="text"
            id="description"
            name="description"
            className="col-span-3"
          />
        </>
        <>
          <div className="">
            <Label htmlFor="" className="text-right">
              Product Image
            </Label>
            <br />
          </div>
          <Input
            type="file"
            id="productImage"
            name="product_image"
            className="col-span-3"
          />
        </>

        <Button type='submit'> Save</Button>
      </form>
    </div>
  )
};



export default function Admin() {


  return <div>
    <Header />

    <ProductForm />

  </div>
}