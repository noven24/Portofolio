"use client";

import { Flex, Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.instagramPostIds?.map((postId, index) => (
        <Flex
          key={`ig-${index}`}
          fillWidth
          border="neutral-medium"
          borderStyle="solid"
          radius="m"
          style={{ overflow: "hidden", background: "var(--neutral-alpha-weak)" }}
        >
          <iframe
            src={`https://www.instagram.com/p/${postId}/embed`}
            width="100%"
            height="850"
            scrolling="auto"
            style={{ border: "none" }}
          />
        </Flex>
      ))}
      
      {gallery.images.map((image, index) => (
        <Media
          enlarge
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </MasonryGrid>
  );
}
