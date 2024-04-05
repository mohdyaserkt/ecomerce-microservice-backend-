import { DepenteniciesData } from "../../entities/interfaces";

export const productDeleted_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { productRepository },
  } = dependencies;

  if (!productRepository)
    throw new Error("The product repository should be dependencie");

  const execute = ({ ProductId }: { ProductId: string } ) => {
    
    return productRepository.deleteProduct(ProductId);
  };
  return {
    execute,
  };
};


