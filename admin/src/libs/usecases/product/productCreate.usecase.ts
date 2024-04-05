import { ProductData, ProductStructure } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const productCreate_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { productRepository },
  } = dependencies;

  if (!productRepository)
    throw new Error("The product repository should be dependencie");

  const execute = ({ price,title }:ProductData ) => {
    const productStructure = new ProductStructure({
        price,
        title,
        
      });
    return productRepository.createProduct(productStructure);
  };
  return {
    execute,
  };
};


