import { DepenteniciesData } from "../../entities/interfaces";

export const productDelete_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { productRepository },
  } = dependencies;

  if (!productRepository)
    throw new Error("The product repository should be dependencie");

  const execute = ({ productId }: { productId: string } ) => {
    
    return productRepository.deleteProduct(productId);
  };
  return {
    execute,
  };
};


