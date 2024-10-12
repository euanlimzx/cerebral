import { Box, HStack, Text, Icon, Divider } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { ProductCard } from "./productCard";
export default function ProductGallery({ pid, setPid }) {
  const data = [
    {
      "Uniqe Id": "0379ca9ef04209d1aae2106711eb7c76",
      "Product Name":
        "MightySkins Skin Compatible with Parrot Bebop 2 \u2013 Slow Sloth | Protective, Durable, and Unique Vinyl Decal wrap Cover | Easy to Apply, Remove, and Change Styles | Made in The USA",
      "Brand Name": "",
      Asin: "",
      Category:
        "Toys & Games | Hobbies | Remote & App Controlled Vehicles & Parts | Remote & App Controlled Vehicles | Quadcopters & Multirotors",
      "Upc Ean Code": "",
      "List Price": "",
      "Selling Price": 24.99,
      Quantity: "",
      "Model Number": "PABEBOP2-Slow Sloth",
      "About Product":
        "HUNDREDS OF CHOICES: Show off your own unique style with Mighty Skins for your Parrot Bebop 2! Don\u2019t like the Slow Sloth skin? We have hundreds of designs to choose from, so your gear will be as unique as you are! | DURABLE PROTECTION FOR YOUR DEVICE: Manufactured with ultra-thin, ultra-durable, stain-resistant laminate vinyl in order to effectively protect your gear from dings, scrapes, dust, and the wear and tear of everyday use! Mighty Skins a SOFT vinyl skin cover, is not made of rubber, silicone or plastic And it is NOT a HARD case | GOES ON AND COMES OFF EASY: Apply your Mighty Skins vinyl decal easily And with precision on your gear thanks to a patented low grip air release adhesive that\u2019s built to last but removes easily and leaves no sticky residue when you\u2019re ready to switch to a different design! | SATISFACTION : Our , knowledgeable staff is here to help and customer satisfaction is our top priority! If you have any issues with your order or you\u2019re not happy for any reason, just let us know and we\u2019ll be there to help! | PROUDLY MADE IN THE USA: We Use Only 3M automotive-grade vinyl, the industry's most trusted brand, Mighty Skins are produced in our state-of-the-art facility in West Palm Beach, Florida.",
      "Product Specification":
        "ProductDimensions:9x0.1x6inches|ItemWeight:0.16ounces|ShippingWeight:1|ASIN:B0759Y6HTR|Itemmodelnumber:PABEBOP2-SlowSloth",
      "Technical Details":
        "show up to 2 reviews by default Do You Want Your Parrot Bebop 2 To Look Different Than The Rest? You\u2019re in the right place because we\u2019ve got exactly what you\u2019re looking for! This Slow Sloth skin is the perfect way to show off your gear! Or with hundreds of other Mighty skins designs, you can be sure to find one that you\u2019ll love, and that will show off your unique style! Do You Want To Protect Your Parrot Bebop 2? With Mighty skins your gear is protected from scratches, dings, dust, fingertips, and the wear-and-tear of everyday use! Cover your Parrot Bebop 2 with a beautiful, stylish decal skin and keep it protected at the same time! Easy to apply, and easy to remove without any sticky residue! Make your favorite gear look like new, and stand out from the crowd! Order With Confidence - Satisfaction ! Mighty skins are durable, reliable, made in our state-of-the-art production facility in the U. S. A. , and backed by our satisfaction ! Product Details: NOT A HARD CASE Vinyl decal sticker Matte Finish Ultra-Thin, Ultra-Durable, Stain Resistant Hundreds of different designs Parrot Bebop 2 is not included. | 1",
      "Shipping Weight": 1,
      "Product Dimensions": "",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/51PAjjCyfSL.jpg|https://images-na.ssl-images-amazon.com/images/I/51TkpEBheeL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
      Variants: "",
      Sku: "",
      "Product Url":
        "https://www.amazon.com/MightySkins-Skin-Parrot-Bebop-Protective/dp/B0759Y6HTR",
      Stock: "",
      "Product Details": "",
      Dimensions: "",
      Color: "",
      Ingredients: "",
      "Direction To Use": "",
      "Is Amazon Seller": "Y",
      "Size Quantity Variant": "",
      "Product Description": "",
    },
    {
      "Uniqe Id": "ed8d9032bc6d9f45b4db9209d693fdc0",
      "Product Name": "Martha Stewart Crafts Stencil Tape, 32292",
      "Brand Name": "",
      Asin: "",
      Category:
        "Arts, Crafts & Sewing | Crafting | Paper & Paper Crafts | Paper Craft Tools",
      "Upc Ean Code": "",
      "List Price": "",
      "Selling Price": 9.97,
      Quantity: "",
      "Model Number": 32292,
      "About Product":
        "Create plaids, stripes and checkerboards | Low tack adhesive | Easily removed | Holds stencils securely in place | Prevents run under of paint",
      "Product Specification":
        "ProductDimensions:8.8x0.8x4.5inches|ShippingWeight:2.4ounces(Viewshippingratesandpolicies)|DomesticShipping:ItemcanbeshippedwithinU.S.|InternationalShipping:ThisitemcanbeshippedtoselectcountriesoutsideoftheU.S.LearnMore|Itemmodelnumber:32292|ASIN:B007C7XUI8",
      "Technical Details":
        "2.4 ounces (View shipping rates and policies) | show up to 2 reviews by default Martha Stewart stencil tape. Low-tack tape is safe for fabrics and other surfaces. Use to hold stencils securely in place or to mask off areas while stenciling. Contains one roll, 3/4-inch-by-25-yards. Made in the USA",
      "Shipping Weight": "2.4 ounces",
      "Product Dimensions": "",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/41gxmYiDaRL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
      Variants: "",
      Sku: "",
      "Product Url":
        "https://www.amazon.com/Martha-Stewart-Crafts-Stencil-32292/dp/B007C7XUI8",
      Stock: "",
      "Product Details": "",
      Dimensions: "",
      Color: "",
      Ingredients: "",
      "Direction To Use": "",
      "Is Amazon Seller": "N",
      "Size Quantity Variant": "",
      "Product Description": "",
    },
    {
      "Uniqe Id": "a8dc69040cc0bb452c92cfe9bb57aa1c",
      "Product Name":
        "LEGO Friends Heartlake Surf Shop 41315 Building Kit (186 Pieces)",
      "Brand Name": "",
      Asin: "",
      Category: "Toys & Games | Building Toys",
      "Upc Ean Code": "",
      "List Price": "",
      "Selling Price": 19.99,
      Quantity: "",
      "Model Number": 6174682,
      "About Product":
        "Make sure this fits by entering your model number. | Features a surf shop with opening door, beach area with sun lounger, jetty with buoys, surfboard stand, buildable kayak and a rock for the seal | Includes a Mia mini-doll figure in a wetsuit, plus a Velvet the seal figure | Accessory elements include a paddle, 2 surfboards, waterproof camera, sunglasses, binoculars, water bottles, postcard and a cash register | Surf shop measures over 4in (11cm) high, 5in (14cm) wide and 6in (17cm) deep | Kayak measures over 4in (12cm) long, and under 1in (1cm) high and 1in (2cm) wide",
      "Product Specification":
        "ProductDimensions:7.5x2.8x10.3inches|ItemWeight:0.96ounces|ShippingWeight:13.3ounces(Viewshippingratesandpolicies)|DomesticShipping:ItemcanbeshippedwithinU.S.|InternationalShipping:Thisitemisnoteligibleforinternationalshipping.LearnMore|ASIN:B071F446SZ|Itemmodelnumber:6174682|Manufacturerrecommendedage:6-12years",
      "Technical Details":
        "Go to your orders and start the return Select the ship method Ship it! | Go to your orders and start the return Select the ship method Ship it! | show up to 2 reviews by default Your explorer can celebrate their summer excitement with all of the accessories in the LEGO Friends Heartlake Surf Shop set. Kids can catch a wave and create stories about the adventures they have on their boards. Builders will love to create summer memories with this set! Multiple models and plenty of extras makes this set a great value, and combine it with LEGO Friends Sunshine Catamaran and Andrea\u2019s Speedboat Transporter to continue the summer fun! | 13.3 ounces (View shipping rates and policies)",
      "Shipping Weight": "13.3 ounces",
      "Product Dimensions": "",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/51eDi60wqEL.jpg|https://images-na.ssl-images-amazon.com/images/I/61zg%2BAV6fCL.jpg|https://images-na.ssl-images-amazon.com/images/I/61fiDweaWGL.jpg|https://images-na.ssl-images-amazon.com/images/I/510viAZx6PL.jpg|https://images-na.ssl-images-amazon.com/images/I/51rhxHprXNL.jpg|https://images-na.ssl-images-amazon.com/images/I/51Lfwh5ZhhL.jpg|https://images-na.ssl-images-amazon.com/images/I/41spw19IW%2BL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
      Variants: "",
      Sku: "",
      "Product Url":
        "https://www.amazon.com/LEGO-Friends-Heartlake-41315-Building/dp/B071F446SZ",
      Stock: "",
      "Product Details": "",
      Dimensions: "",
      Color: "",
      Ingredients: "",
      "Direction To Use": "",
      "Is Amazon Seller": "Y",
      "Size Quantity Variant": "",
      "Product Description": "",
    },
    {
      "Uniqe Id": "9a895f02b4ad0cae5802632c1993eb06",
      "Product Name":
        "amscan Thank Yous | Hello Kitty Collection | Party Accessory",
      "Brand Name": "",
      Asin: "",
      Category: "Toys & Games | Party Supplies",
      "Upc Ean Code": "",
      "List Price": "",
      "Selling Price": 9.22,
      Quantity: "",
      "Model Number": 489303,
      "About Product":
        'Make sure this fits by entering your model number. | Measures 3.87" x 5.62" | Package of 8 cards | Pink background, "Hello Kitty", stars & balloons design, multi colored striped borders, houses & trees background, headline "Thank You" | Match with our other "Hello Kitty" party collection',
      "Product Specification":
        "ProductDimensions:7.6x4.7x0.1inches|ItemWeight:2.88ounces|ShippingWeight:2.88ounces(Viewshippingratesandpolicies)|DomesticShipping:ItemcanbeshippedwithinU.S.|InternationalShipping:ThisitemcanbeshippedtoselectcountriesoutsideoftheU.S.LearnMore|ASIN:B003OFRXFI|Itemmodelnumber:489303|Manufacturerrecommendedage:12months-15years",
      "Technical Details":
        "Go to your orders and start the return Select the ship method Ship it! | Go to your orders and start the return Select the ship method Ship it! | Product Description After the party is done, make sure you thank your guests for making your party fun using these Hello Kitty Thank You Notes. Hand these over to your guests after the party and thank them for coming over. From the Manufacturer Now that your Hello Kitty Balloon Dreams party has ended (and of course it was a total success), don\u2019t forget the Thank You notes. Kitty White makes it easy for your child to express their thanks with these delightful Amscan Hello Kitty Balloon Dreams Die-Cut Thank You Cards. Presented blank inside for personalization, they also create a wonderful opportunity to teach the importance of saying \u201cThank You\u201d. Established in 1947, Amscan is the largest designer, manufacturer and distributor of decorated party goods and accessories in the world. Count on Amscan and Amazon to create a complete Hello Kitty Balloon Dreams party with Amscan\u2019s Hello Kitty Balloon Dreams plates, napkins, cups, table cover, party game, invitations, jumbo roll wrap, cone hats and more, available on Amazon. | 2.88 ounces (View shipping rates and policies)",
      "Shipping Weight": "2.88 ounces",
      "Product Dimensions": "",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/51YLM9e6QCL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
      Variants: "",
      Sku: "",
      "Product Url":
        "https://www.amazon.com/amscan-Thank-Hello-Collection-Accessory/dp/B003OFRXFI",
      Stock: "",
      "Product Details": "",
      Dimensions: "",
      Color: "",
      Ingredients: "",
      "Direction To Use": "",
      "Is Amazon Seller": "Y",
      "Size Quantity Variant": "",
      "Product Description": "",
    },
    {
      "Uniqe Id": "92791619f785a607f88bdf065b7f132e",
      "Product Name":
        "Great Pretenders Fairy Blooms Deluxe Dress with Wings, Green, Medium",
      "Brand Name": "",
      Asin: "",
      Category:
        "Clothing, Shoes & Jewelry | Costumes & Accessories | Kids & Baby | Girls | Costumes",
      "Upc Ean Code": "",
      "List Price": "",
      "Selling Price": 34.99,
      Quantity: "",
      "Model Number": 36605,
      "About Product":
        "Make sure this fits by entering your model number. | Running in the fields with fairy friends is where you will find your little one in this outfit | The satin ruched top allows your little fairy to be as free as her spirit | She will Flutter around in the printed tulle skirt made from layers of colored tulle. This outfit would not be complete with matching detachable wings",
      "Product Specification":
        "ProductDimensions:21x21x10inches|ItemWeight:14.4ounces|ShippingWeight:14.4ounces(Viewshippingratesandpolicies)|DomesticShipping:ItemcanbeshippedwithinU.S.|InternationalShipping:ThisitemcanbeshippedtoselectcountriesoutsideoftheU.S.LearnMore|ASIN:B00CVB22UM|Itemmodelnumber:36605|Manufacturerrecommendedage:36months-8years",
      "Technical Details":
        "Running in the fields with fairy friends is where you will find your little one in this outfit. The satin ruched top allows your little fairy to be as free as her spirit. She will flutter around in the printed tulle skirt made from layers of colored tulle. This outfit would not be complete with matching detachable wings. | 14.4 ounces (View shipping rates and policies)",
      "Shipping Weight": "14.4 ounces",
      "Product Dimensions": "",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/51B9cK1r7aL.jpg|https://images-na.ssl-images-amazon.com/images/I/41X7cPqfnsL.jpg|https://images-na.ssl-images-amazon.com/images/I/51r83FI1HgL.jpg|https://images-na.ssl-images-amazon.com/images/I/41Og6%2BrEpnL.jpg|https://images-na.ssl-images-amazon.com/images/I/512jkXZM3QL.jpg|https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.jpg",
      Variants: "",
      Sku: "",
      "Product Url":
        "https://www.amazon.com/Great-Pretenders-Blooms-Deluxe-Medium/dp/B00CVB22UM",
      Stock: "",
      "Product Details": "",
      Dimensions: "",
      Color: "",
      Ingredients: "",
      "Direction To Use": "",
      "Is Amazon Seller": "Y",
      "Size Quantity Variant": "",
      "Product Description": "",
    },
  ];

  return (
    <Box height="100vh" display="flex" flexDirection="row">
    <HStack spacing="5" overflowX="scroll" w="60rem">
      {data.map((product) => (
        <ProductCard setPid={setPid} product={product} key={product.id} />
      ))}
    </HStack>
  </Box>
  );
}
