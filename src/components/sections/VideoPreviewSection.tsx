import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { videoPreview } from "@/lib/homepage-content";

const localVideoPath = join(
  process.cwd(),
  "public",
  videoPreview.futureVideoPath.replace(/^\//, "")
);

export function VideoPreviewSection() {
  const hasLocalVideo = existsSync(localVideoPath);

  return (
    <section className="relative h-[62vh] min-h-[420px] overflow-hidden border-y border-white/10 bg-[#05070A] md:h-[78vh]">
      {hasLocalVideo ? (
        <video
          aria-label="Product motion placeholder video"
          autoPlay
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          poster={videoPreview.image}
        >
          <source src={videoPreview.futureVideoPath} type="video/mp4" />
        </video>
      ) : (
        <Image
          alt="Product motion poster placeholder"
          className="object-cover"
          fill
          priority={false}
          sizes="100vw"
          src={videoPreview.image}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/70 via-transparent to-[#05070A]/25" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/35 bg-black/35 shadow-[0_18px_70px_rgba(0,0,0,0.45)] backdrop-blur md:h-20 md:w-20">
          <span className="ml-1 h-0 w-0 border-y-[12px] border-l-[19px] border-y-transparent border-l-white md:border-y-[15px] md:border-l-[24px]" />
        </div>
      </div>
    </section>
  );
}
