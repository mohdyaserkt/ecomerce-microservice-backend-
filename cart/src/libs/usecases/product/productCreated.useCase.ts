import { ProductData, ProductStructure } from "../../entities";
import { DepenteniciesData } from "../../entities/interfaces";

export const productCreated_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { productRepository },
  } = dependencies;

  if (!productRepository)
    throw new Error("The product repository should be dependencie");

  const execute = ({ price,title,id }:ProductData ) => {
    const productStructure = new ProductStructure({
        price,
        title,
        id,
      });
    return productRepository.addProduct(productStructure);
  };
  return {
    execute,
  };
};


