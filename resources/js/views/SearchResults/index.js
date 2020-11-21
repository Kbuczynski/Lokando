import React, {useState} from 'react';
import Wrapper from "../../components/Wrapper";
import Filters from "./Filters";
import Product from "../../components/Product";

const SearchResults = () => {

    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState([0, 2000]);
    const [status, setStatus] = useState("");
    const [sort, setSort] = useState("domyslnie");

    return (
        <Wrapper>
            <div className={"searchResults"}>
                <Filters
                    category={category}
                    setCategory={setCategory}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    status={status}
                    setStatus={setStatus}
                    sort={sort}
                    setSort={setSort}
                />

                <div className={"searchResults__products products container"}>
                    <Product
                        img={"https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"}
                        title={"Samsung Galaxy A31 128GB (czarny)"}
                        desc={"Aparaty tylny/przedni   48 Mpix + 8 Mpix + 5 Mpix + 5 Mpix / 20 Mpix\n" +
                        "Pojemność baterii   5000 mAh \n" +
                        "Pamięć   4 GB / 128 GB\n" +
                        "Wyświetlacz   6,4\", 2400 x 1080 pikseli, AMOLED"}
                        price={3000}
                        logo={"https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/08/ily_logo.jpg"}
                        companyName={"Sklep Ily Line"}
                        companyLocation={"ul. Świecowa 4"}
                    />

                    <Product
                        img={"https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"}
                        title={"Samsung Galaxy A31 128GB (czarny)"}
                        desc={"Aparaty tylny/przedni   48 Mpix + 8 Mpix + 5 Mpix + 5 Mpix / 20 Mpix\n" +
                        "Pojemność baterii   5000 mAh \n" +
                        "Pamięć   4 GB / 128 GB\n" +
                        "Wyświetlacz   6,4\", 2400 x 1080 pikseli, AMOLED"}
                        price={3000}
                        logo={"https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/08/ily_logo.jpg"}
                        companyName={"Sklep Ily Line"}
                        companyLocation={"ul. Świecowa 4"}
                    />

                    <Product
                        img={"https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"}
                        title={"Samsung Galaxy A31 128GB (czarny)"}
                        desc={"Aparaty tylny/przedni   48 Mpix + 8 Mpix + 5 Mpix + 5 Mpix / 20 Mpix\n" +
                        "Pojemność baterii   5000 mAh \n" +
                        "Pamięć   4 GB / 128 GB\n" +
                        "Wyświetlacz   6,4\", 2400 x 1080 pikseli, AMOLED"}
                        price={3000}
                        logo={"https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/08/ily_logo.jpg"}
                        companyName={"Sklep Ily Line"}
                        companyLocation={"ul. Świecowa 4"}
                    />

                    <Product
                        img={"https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"}
                        title={"Samsung Galaxy A31 128GB (czarny)"}
                        desc={"Aparaty tylny/przedni   48 Mpix + 8 Mpix + 5 Mpix + 5 Mpix / 20 Mpix\n" +
                        "Pojemność baterii   5000 mAh \n" +
                        "Pamięć   4 GB / 128 GB\n" +
                        "Wyświetlacz   6,4\", 2400 x 1080 pikseli, AMOLED"}
                        price={3000}
                        logo={"https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/08/ily_logo.jpg"}
                        companyName={"Sklep Ily Line"}
                        companyLocation={"ul. Świecowa 4"}
                    />

                    <Product
                        img={"https://f00.esfr.pl/foto/1/66040858489/6d4af2b5946aeb42acfce84b595c3fcb/samsung-smartfon-galaxy-a31-czarny-samsung,66040858489_8.jpg"}
                        title={"Samsung Galaxy A31 128GB (czarny)"}
                        desc={"Aparaty tylny/przedni   48 Mpix + 8 Mpix + 5 Mpix + 5 Mpix / 20 Mpix\n" +
                        "Pojemność baterii   5000 mAh \n" +
                        "Pamięć   4 GB / 128 GB\n" +
                        "Wyświetlacz   6,4\", 2400 x 1080 pikseli, AMOLED"}
                        price={3000}
                        logo={"https://kupujlokalnie.stargard.pl/wp-content/uploads/2020/08/ily_logo.jpg"}
                        companyName={"Sklep Ily Line"}
                        companyLocation={"ul. Świecowa 4"}
                    />
                </div>
            </div>
        </Wrapper>
    );
};

export default SearchResults;
