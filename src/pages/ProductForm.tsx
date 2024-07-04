import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@shadcn-ui/button"
import { API_URL } from "@utils/index"
import { useState } from "react"
import Select from "react-select";

type Inputs = {

    product_name: string,
    product_unit_price: string,
    description: string,
    product_category: string | null,
    available_colors: Array<string>,
    is_available: boolean,
    in_stock: number,
    product_image: FileList | null,
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
    none,
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
        setValue,
    } = useForm<Inputs>()


    const [imageURL, setImageURL] = useState<string | null>(null);
    const [productCategory, setProductCategory] =
        useState<ProductCategories | null>(ProductCategories.phone)
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);


    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

        if (event.target.value == "none") {

            setProductCategory(ProductCategories.none)
            setValue("product_category", event.target.value)

        } else if (event.target.value == "phone") {

            setProductCategory(ProductCategories.phone)
            setValue("product_category", event.target.value)

        } else if (event.target.value == "accessory") {

            setProductCategory(ProductCategories.accessory)
            setValue("product_category", event.target.value)

        } else if (event.target.value == "lifestyle") {

            setProductCategory(ProductCategories.lifestyle)
            setValue("product_category", event.target.value)

        } else if (event.target.value == "covers_protectors") {

            setProductCategory(ProductCategories.covers_protectors)
            setValue("product_category", event.target.value)
        } else {
            setProductCategory(null)
            setValue("product_category", null)
        }
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const files = event.target.files;
        const file = files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageURL(imageUrl);
            setSelectedFiles(files)
        }
    };

    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        console.log(data.available_colors)
        const form = new FormData()

        form.append("product_name", data.product_name)
        form.append("product_unit_price", data.product_unit_price)
        form.append("battery", data.battery)
        form.append("brand", data.brand)
        form.append("cameras", data.cameras)
        form.append("description", data.description)
        form.append("display", data.display)
        form.append("in_stock", `${data.in_stock}`)
        form.append("is_available", "1")
        form.append("available_colors", JSON.stringify(data.available_colors))
        form.append("model", data.model)
        form.append("processor", data.processor)
        form.append("product_category", `${data.product_category}`)
        console.log(selectedFiles)
        if (selectedFiles) {
            form.append("product_image", selectedFiles[0]);
        }
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

    const colorOptions = [
        { value: "red", label: "Red" },
        { value: "blue", label: "Blue" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "black", label: "Black" },
        { value: "white", label: "White" },
    ];

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
            <label htmlFor="product_category" className="flex flex-col gap-y-2">
                <span>Product Category</span>
                <select id="product_category"
                    // {...register("product_category", { required: true })}
                    onChange={handleCategoryChange}
                    className="h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md">

                    <option value="none" className=""> -- Select Product Category -- </option>
                    <option value="phone" className="">SmartPhone</option>
                    <option value="accessory">Accessory</option>
                    <option value="lifestyle">LifeStyle</option>
                    <option value="covers_protectors">Covers & Protectors</option>
                </select>
                {errors.product_category && <span className="text-red-500">This field is required</span>}
            </label>

            {productCategory != ProductCategories.none && <>
                <label htmlFor="product_name" className="flex flex-col gap-y-2">
                    <span>Product Name</span>
                    <input id="product_name" {...register("product_name", { required: true })} className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                    {errors.product_name && <span className="text-red-500">This field is required</span>}
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
                        <input id="battery"
                            {...productCategory == ProductCategories.phone ? register("product_category", { required: true }) : register("product_category")}
                            className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                        {errors.battery && <span className="text-red-500">This field is required</span>}
                    </label>
                }
                {
                    productCategory == ProductCategories.phone &&
                    <label htmlFor="cameras" className="flex flex-col gap-y-2">
                        <span>Camera Spec</span>
                        <input id="cameras"
                            {...productCategory == ProductCategories.phone ? register("cameras", { required: true }) : register("cameras")}
                            className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                        {errors.cameras && <span className="text-red-500">This field is required</span>}
                    </label>
                }
                {
                    productCategory == ProductCategories.phone &&
                    <label htmlFor="display" className="flex flex-col gap-y-2">
                        <span>Display</span>
                        <input id="display"
                            {...productCategory == ProductCategories.phone ? register("display", { required: true }) : register("display")}
                            className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                        {errors.display && <span className="text-red-500">This field is required</span>}
                    </label>
                }
                {
                    productCategory == ProductCategories.phone &&
                    <label htmlFor="ram" className="flex flex-col gap-y-2">
                        <span>RAM</span>
                        <input id="ram"
                            {...productCategory == ProductCategories.phone ? register("ram", { required: true }) : register("ram")}
                            className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                        {errors.ram && <span className="text-red-500">This field is required</span>}
                    </label>
                }
                {
                    productCategory == ProductCategories.phone &&
                    <label htmlFor="rom" className="flex flex-col gap-y-2">
                        <span>ROM</span>
                        <input id="rom"
                            {...productCategory == ProductCategories.phone ? register("rom", { required: true }) : register("rom")} className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                        {errors.rom && <span className="text-red-500">This field is required</span>}
                    </label>
                }
                {
                    productCategory == ProductCategories.phone &&
                    <label htmlFor="rom" className="flex flex-col gap-y-2">
                        <span>Processors</span>
                        <input id="processor"
                            {...productCategory == ProductCategories.phone ? register("processor", { required: true }) : register("processor")}
                            className="
                h-10 px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md"/>
                        {errors.processor && <span className="text-red-500">This field is required</span>}
                    </label>
                }
                <label htmlFor="available_colors" className="flex flex-col gap-y-2">
                    <span>Available Colors</span>
                    <Select
                        id="available_colors"
                        isMulti

                        options={colorOptions}
                        onChange={(selectedOptions) => {
                            const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
                            setValue("available_colors", values)
                        }}
                    />
                    {errors.available_colors && <span className="text-red-500">This field is required</span>}
                </label>
                <label htmlFor="description" className="flex flex-col gap-y-2">
                    <span>Description</span>
                    <textarea id="description" rows={6} maxLength={255} {...register("description", { required: true })}
                        className="px-4 py-2 bg-white border-[1px] border-gray-500 rounded-md">
                    </textarea>
                    {errors.description && <span className="text-red-500">This field is required</span>}
                </label>
            </>}
            <Button type="submit" disabled={productCategory == ProductCategories.none ? true : false}>Add Product</Button>
        </form>
    )
}