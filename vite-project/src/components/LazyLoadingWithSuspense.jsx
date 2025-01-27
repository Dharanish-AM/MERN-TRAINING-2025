import { lazy,Suspense } from "react";


 export default function LazyLoadingWithSuspence(){
    const LazyComponent=lazy(()=>import("../hooks/UseAPIImage"))
    return(
         <div>
           <Suspense fallback={<h3>Loading...</h3>}>
               <h1>
                this is LazyLoadingWithSuspence example
                <LazyComponent />
               </h1>
           </Suspense>
         </div>
    );
 }