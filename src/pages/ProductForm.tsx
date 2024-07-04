import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@shadcn-ui/button"
import { API_URL } from "@utils/index"
import { useState } from "react"


type Inputs = {

    product_name: string,
    product_unit_price: string,
    description: string,
    product_category: string,
    available_colors: Array<string>,
    is_available: boolean,
    in_stock: number,
    product_image: FileList,
    model: string,
    brand: string,
    battery: string,
    cameras: string,
    processor: string,
    display: string,
    ram: string,
    rom: string,
}

enum ProductCategories {
    phone,
    accessory,
    lifestyle,
    covers_protectors
}

export default function ProductForm() {


    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<Inputs>()


    const [imageURL, setImageURL] = useState<string | null>(null);
    const [productCategory, setProductCategory] =
        useState<ProductCategories>(ProductCategories.phone)
    // const [selectedFile, setSelectedFile] = useState<File | null>(null);


    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

        if (event.target.value == "phone") {

            setProductCategory(ProductCategories.phone)

        } else if (event.target.value == "accessory") {

            setProductCategory(ProductCategories.accessory)

        } else if (event.target.value == "lifestyle") {

            setProductCategory(ProductCategories.lifestyle)

        } else if (event.target.value == "covers_protectors") {

            setProductCategory(ProductCategories.covers_protectors)

        }
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const files = event.target.files;
        const file = files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageURL(imageUrl);
            // setSelectedFile(file)
            setValue("product_image", files);
        }
    };

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data)
        const form = new FormData()

        form.append("product_name", data.product_name)
        form.append("product_unit_price", data.product_unit_price)
        form.append("battery", data.battery)
        form.append("brand", data.brand)
        form.append("cameras", data.cameras)
        form.append("description", data.description)
        form.append("display", data.display)
        form.append("in_stock", data.in_stock.toString())
        form.append("is_available", "1")
        form.append("available_colors", data.available_colors.toString())
        form.append("model", data.model)
        form.append("processor", data.processor)
        form.append("product_category", data.product_category)
        // if (selectedFile) {
        //     form.append("product_image", selectedFile);
        // }
        form.append("ram", data.ram)
        form.append("rom", data.rom)

        const response = await fetch(`${API_URL}/products`,
            {
                method: "POST",
                body: form
            });

        if (!response.ok) {
            throw Error("Error: " + response.body)
        }

        const response_data = await response.json()
        console.log(response_data)

    }

    return (
        <form id="ProductForm" onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-10 w-[300px]">
            <label htmlFor="product_image" className="flex flex-col gap-y-2">
                <div className="flex flex-col gap-y-4 justify-center items-center h-72 border-dashed border-2 border-gray-500 rounded-md">
                    {imageURL ? (
                        <img src={imageURL} alt="Product" className="w-full h-full object-cover" />
                    ) : (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-16"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>
                            {errors.product_image ? (
                                <span className="text-red-500">Product Image is required</span>
                            ) : (
                                <span>Select a Product Image</span>
                            )}
                        </>
                    )}
                </div>
                <input
                    id="product_image"
                    type="file"
                    {...register("product_image", { required: true })}
                    onChange={handleImageChange}
                    accept="image/jpeg,image/png,image/jpg,image/webp,image/avif,image/bmp"
                    className="h-10 px-4 py-2 hidden"
                />
            </label>
            <label htmlFor="product_name" className="flex flex-col gap-y-2">
                <span>Product Name</span>
                <input id="product_name" {...register("product_name", { required: true })} className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                {errors.product_name && <span className="text-red-500">This field is required</span>}
            </label>
            <label htmlFor="product_category" className="flex flex-col gap-y-2">
                <span>Product Category</span>
                <select id="product_category"
                    // {...register("product_category", { required: true })}
                    onChange={handleCategoryChange}
                    className="h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md">
                    <option value="phone" className="">SmartPhone</option>
                    <option value="accessory">Accessory</option>
                    <option value="lifestyle">LifeStyle</option>
                    <option value="covers_protectors">Covers & Protectors</option>
                </select>
                {errors.product_category && <span className="text-red-500">This field is required</span>}
            </label>
            <label htmlFor="product_unit_price" className="flex flex-col gap-y-2">
                <span>Unit Price</span>
                <input id="product_unit_price" type="number" min={1} {...register("product_unit_price", { required: true })} className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                {errors.product_unit_price && <span className="text-red-500">This field is required</span>}
            </label>
            <label htmlFor="is_available" className="flex flex-col gap-y-2">
                <>
                    <span>Available ?</span>
                    <input type="checkbox" defaultChecked id="is_available" {...register("is_available", { required: true })} className="
                h-10 px-4 py-2 bg-white self-start"/>
                </>
                {errors.is_available && <span className="text-red-500">This field is required</span>}
            </label>
            <label htmlFor="in_stock" className="flex flex-col gap-y-2">
                <span>Units in Stock</span>
                <input id="in_stock" type="number" {...register("in_stock", { required: true })} className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                {errors.in_stock && <span className="text-red-500">This field is required</span>}
            </label>
            <label htmlFor="model" className="flex flex-col gap-y-2">
                <span>Model</span>
                <input id="model"
                    {...productCategory == ProductCategories.phone ? { ...register("model", { required: true }) } : { ...register("model") }}
                    className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"
                />
                {errors.model && <span className="text-red-500">This field is required</span>}
            </label>
            <label htmlFor="brand" className="flex flex-col gap-y-2">
                <span>Brand</span>
                <input id="brand"
                    {...productCategory == ProductCategories.phone ? { ...register("brand", { required: true }) } : { ...register("brand") }}
                    className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                {errors.brand && <span className="text-red-500">This field is required</span>}
            </label>
            {
                productCategory == ProductCategories.phone &&
                <label htmlFor="battery" className="flex flex-col gap-y-2">
                    <span>Battery</span>
                    <input id="battery" {...register("battery", { required: true })} className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                    {errors.battery && <span className="text-red-500">This field is required</span>}
                </label>
            }
            {
                productCategory == ProductCategories.phone &&
                <label htmlFor="cameras" className="flex flex-col gap-y-2">
                    <span>Camera Spec</span>
                    <input id="cameras" {...register("cameras", { required: true })} className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                    {errors.cameras && <span className="text-red-500">This field is required</span>}
                </label>
            }
            {
                productCategory == ProductCategories.phone &&
                <label htmlFor="display" className="flex flex-col gap-y-2">
                    <span>Display</span>
                    <input id="display" {...register("display", { required: true })} className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                    {errors.display && <span className="text-red-500">This field is required</span>}
                </label>
            }
            {
                productCategory == ProductCategories.phone &&
                <label htmlFor="ram" className="flex flex-col gap-y-2">
                    <span>RAM</span>
                    <input id="ram" {...register("ram", { required: true })} className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                    {errors.ram && <span className="text-red-500">This field is required</span>}
                </label>
            }
            {
                productCategory == ProductCategories.phone &&
                <label htmlFor="rom" className="flex flex-col gap-y-2">
                    <span>ROM</span>
                    <input id="rom" {...register("rom", { required: true })} className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                    {errors.rom && <span className="text-red-500">This field is required</span>}
                </label>
            }
            {
                productCategory == ProductCategories.phone &&
                <label htmlFor="rom" className="flex flex-col gap-y-2">
                    <span>Processors</span>
                    <input id="processor" {...register("processor", { required: true })} className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                    {errors.processor && <span className="text-red-500">This field is required</span>}
                </label>
            }
            <label htmlFor="rom" className="flex flex-col gap-y-2">
                <span>Available Colors</span>
                <input id="available_colors" {...register("available_colors", { required: true })} className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                {errors.available_colors && <span className="text-red-500">This field is required</span>}
            </label>
            <label htmlFor="description" className="flex flex-col gap-y-2">
                <span>Description</span>
                <textarea id="description" rows={6} maxLength={255} {...register("description", { required: true })}
                    className="px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md">
                </textarea>
                {errors.description && <span className="text-red-500">This field is required</span>}
            </label>
            <Button type="submit">Add Product</Button>
        </form>
    )
}