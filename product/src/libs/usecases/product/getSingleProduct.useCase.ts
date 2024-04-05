import { DepenteniciesData } from "../../entities/interfaces";

export const getSingleProduct_UseCase = (dependencies: DepenteniciesData) => {
  const {
    repository: { productRepository },
  } = dependencies;

  if (!productRepository)
    throw new Error("The product repository should be dependencie");

  const execute = ({ ProductId }: { ProductId: string }) => {
    return productRepository.getSingleProducts(ProductId);
  };
  return {
    execute,
  };
};


