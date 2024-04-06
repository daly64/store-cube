import useProductStore from "@/tools/client/zustand/producctStore";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";

 const AddProductDialog = () => {
   const {
     toggleAddProductDialog,
     addProductDialogState,
     useSaveProduct,
     newProduct: product,
     setNewProduct: setProduct,
   } = useProductStore();
   const { saveProduct } = useSaveProduct(product);

   return (
     <div className="sm:w-60p md:w-60p lg:w-60p xl:w-60p mx-auto">
       <Dialog
         header="Add New Product"
         visible={addProductDialogState}
         onHide={toggleAddProductDialog}
       >
         <form onSubmit={saveProduct}>
           <div className="flex flex-col gap-2">
             <label htmlFor="name" className="font-semibold">
               Name
             </label>
             <InputText
               required
               autoFocus
               value={product.name}
               onChange={(e) =>
                 setProduct({ ...product, name: e.target.value })
               }
             />

             <label htmlFor="price" className="font-semibold">
               Price
             </label>
             <InputNumber
               value={product.price}
               onValueChange={(e) =>
                 setProduct({ ...product, price: Number(e.value) })
               }
               currency="TND"
               mode="currency"
               locale="fr-FR"
             />

             <label htmlFor="quantity" className="font-semibold">
               Quantity
             </label>
             <InputNumber
               value={product.quantity}
               onValueChange={(e) =>
                 setProduct({ ...product, quantity: Number(e.value) })
               }
               mode="decimal"
               showButtons
               min={0}
             />

             <Button type="submit" className="mt-4" label="save" />
           </div>
         </form>
       </Dialog>
     </div>
   );
 };
export default AddProductDialog;
