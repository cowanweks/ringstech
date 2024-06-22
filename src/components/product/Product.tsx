// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"




// const formSchema = z.object({
//   product_name: z.string().min(2, { message: "Product name must be at least 2 characters." }),
//   type: z.enum(["phone", "accessory", "covers_protectors"], { errorMap: () => ({ message: "Invalid category selected" }) }),
//   ram: z.string().min(2, { message: "Product RAM must be at least 2 characters." }),
//   rom: z.string().min(2, { message: "Product ROM must be at least 2 characters." }),
//   description: z.string().min(2, { message: "Description must be at least 2 characters." }),
//   product_unit_price: z.preprocess((val) => parseFloat(val), z.number().positive({ message: "Product unit price must be a positive number." })),
//   product_category: z.enum(["phone", "accessory", "covers_protectors"], { errorMap: () => ({ message: "Invalid category selected" }) }),
//   available_colors: z.string().min(2, { message: "Available colors must be at least 2 characters." }),
//   in_stock: z.preprocess((val) => parseInt(val, 10), z.number().min(0, { message: "In stock must be at least 0." })),
//   product_image: z.instanceof(File, { message: "A valid file is required." }),
//   brand: z.string().min(2, { message: "Brand must be at least 2 characters." }),
//   model: z.string().min(2, { message: "Model must be at least 2 characters." }),
//   battery: z.string().min(2, { message: "Battery must be at least 2 characters." }),
//   cameras: z.string().min(2, { message: "Cameras must be at least 2 characters." }),
//   processor: z.string().min(2, { message: "Processor must be at least 2 characters." }),
//   display: z.string().min(2, { message: "Display must be at least 2 characters." }),
// });

// export default function ProductForm() {
//   const { handleSubmit, register, setValue, formState: { errors } } = useForm({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit = (data) => {
//     console.log('Form Data:', data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <div>
//         <label>Product Name</label>
//         <input {...register('product_name')} placeholder="Product Name" />
//         {errors.product_name && <span>{errors.product_name.message}</span>}
//         <small>This is the Item name.</small>
//       </div>

//       <div>
//         <label>Product Type</label>
//         <select {...register('type')}>
//           <option value="phone">SmartPhone</option>
//           <option value="accessory">Accessory</option>
//           <option value="covers_protectors">Covers & Protectors</option>
//         </select>
//         {errors.type && <span>{errors.type.message}</span>}
//         <small>This is the Item Type.</small>
//       </div>

//       <div>
//         <label>Product RAM</label>
//         <input {...register('ram')} placeholder="Product RAM" />
//         {errors.ram && <span>{errors?.ram.message}</span>}
//         <small>This is the Item RAM size.</small>
//       </div>

//       <div>
//         <label>Product ROM</label>
//         <input {...register('rom')} placeholder="Product ROM" />
//         {errors.rom && <span>{errors.rom.message}</span>}
//         <small>This is the Item ROM size.</small>
//       </div>

//       <div>
//         <label>Unit Price</label>
//         <input type="number" step="0.01" {...register('product_unit_price')} placeholder="Item Unit Price" />
//         {errors.product_unit_price && <span>{errors.product_unit_price.message}</span>}
//         <small>This is the Item Unit Price.</small>
//       </div>

//       <div>
//         <label>Item Category</label>
//         <select {...register('product_category')}>
//           <option value="phone">SmartPhone</option>
//           <option value="accessory">Accessory</option>
//           <option value="covers_protectors">Covers & Protectors</option>
//         </select>
//         {errors.product_category && <span>{errors.product_category.message}</span>}
//         <small>This is the Item Category.</small>
//       </div>

//       <div>
//         <label>Item Available Colors</label>
//         <input {...register('available_colors')} placeholder="Item Available Colors" />
//         {errors.available_colors && <span>{errors.available_colors.message}</span>}
//         <small>These are the Colors the Item is available in.</small>
//       </div>

//       <div>
//         <label>Items In Stock</label>
//         <input type="number" {...register('in_stock')} placeholder="Items In Stock" />
//         {errors.in_stock && <span>{errors.in_stock.message}</span>}
//         <small>This is the number of Items in stock.</small>
//       </div>

//       <div>
//         <label>Product Brand</label>
//         <input {...register('brand')} placeholder="Product Brand" />
//         {errors.brand && <span>{errors.brand.message}</span>}
//         <small>This is the Product brand.</small>
//       </div>

//       <div>
//         <label>Product Model</label>
//         <input {...register('model')} placeholder="Product Model" />
//         {errors.model && <span>{errors.model.message}</span>}
//         <small>This is the Product model.</small>
//       </div>

//       <div>
//         <label>Product Battery</label>
//         <input {...register('battery')} placeholder="Product Battery" />
//         {errors.battery && <span>{errors.battery.message}</span>}
//         <small>This is the Product battery specs.</small>
//       </div>

//       <div>
//         <label>Product Camera</label>
//         <input {...register('cameras')} placeholder="Product Cameras" />
//         {errors.cameras && <span>{errors.cameras.message}</span>}
//         <small>This is the Product Camera specs.</small>
//       </div>

//       <div>
//         <label>Product Processor</label>
//         <input {...register('processor')} placeholder="Product Processor" />
//         {errors.processor && <span>{errors.processor.message}</span>}
//         <small>This is the Product Processor specs.</small>
//       </div>

//       <div>
//         <label>Product Display</label>
//         <input {...register('display')} placeholder="Product Display" />
//         {errors.display && <span>{errors.display.message}</span>}
//         <small>This is the Product Display specs.</small>
//       </div>

//       <div>
//         <label>Product Image</label>
//         <input type="file" {...register('product_image')} onChange={(e) => setValue('product_image', e.target.files[0])} />
//         {errors.product_image && <span>{errors.product_image.message}</span>}
//         <small>This is the Product showcase image.</small>
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }
