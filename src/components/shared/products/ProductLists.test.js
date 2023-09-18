import { screen, render } from "@testing-library/react";
import ProductLists from "./ProductLists";

describe("product lists", () => {
  test("should return array of product cards", async () => {
    const productData = [
      {
        categoryPath: [
          { name: "Best Buy" },
          { name: "Cell Phones" },
          { name: "All Cell Phones with Plans" },
        ],
        color: "Black",
        condition: "New",
        customerReviewAverage: 4.7,
        customerReviewCount: 612,
        description: null,
        dollarSavings: 0,
        features: [
          { feature: "6.1-inch Super Retina XDR display&#178;" },
          { feature: "Ceramic Shield, tougher than any smartphone glass" },
          {
            feature:
              "5G for superfast downloads and high-quality streaming&#185;",
          },
          { feature: "A14 Bionic chip, the fastest chip ever in a smartphone" },
          {
            feature:
              "Advanced dual-camera system with 12MP Ultra Wide a…usion, Smart HDR 3, 4K Dolby Vision HDR recording",
          },
          {
            feature:
              "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording",
          },
          { feature: "Industry-leading IP68 water resistance&#8309;" },
          {
            feature:
              "Supports MagSafe accessories for easy attach and faster wireless charging&#8308;",
          },
          {
            feature:
              "iOS 14 with redesigned widgets on the Home screen, all-new App Library, App Clips, and more",
          },
          {
            feature:
              "&#185; Data plan required. 5G is available in sele… your carrier and see apple.com/iphone/cellular .",
          },
          {
            feature:
              "&#178; The display has rounded corners. When measu… inches diagonally. Actual viewable area is less.",
          },
          {
            feature:
              "&#179; Claim based on iPhone 12 Ceramic Shield front compared with previous-generation iPhone.",
          },
          { feature: "&#8308; Accessories are sold separately." },
          {
            feature:
              "&#8309; iPhone 12 is splash, water, and dust resis…and dust resistance are not permanent conditions.",
          },
          {
            feature:
              "Resistance might decrease as a result of normal we…ctions. Liquid damage not covered under warranty.",
          },
        ],
        freeShipping: true,
        frequentlyPurchasedWith: [],
        image:
          "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6009/6009897_sd.jpg",
        includedItemList: [
          { includedItem: "Apple iPhone 12 5G 64GB" },
          { includedItem: "USB-C to Lightning Cable" },
          { includedItem: "Documentation" },
        ],
        longDescription:
          "iPhone 12. 5G to download movies on the fly and stream high-quality video.&#185; Beautifully bright 6.1-inch Super Retina XDR display.&#178; Ceramic Shield with 4x better drop performance.&#179; Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.&#8308; Let the fun begin.",
        manufacturer: "Apple",
        name: "Apple - iPhone 12 5G 64GB - Black (Verizon)",
        onlineAvailabilityText: null,
        regularPrice: 629.99,
        salePrice: 629.99,
        shippingCost: 0,
        shortDescription: null,
        sku: 6009897,
      },
    ];
    render(<ProductLists productData={productData} />);
    expect(
      await screen.findByText("Apple - iPhone 12 5G 64GB - Black (Verizon)")
    );
  });
});
