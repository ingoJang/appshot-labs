export default function ScreenshotCardSkeleton() {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-gray-100 border border-border-light animate-pulse">
      <div className="relative" style={{ aspectRatio: '9/19.5', width: '100%' }}>
        <div className="absolute inset-0 bg-gray-200" />
      </div>
    </div>
  );
}
