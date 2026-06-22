import Image from 'next/image';

export default function ImageTestPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Image Optimization Test</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Responsive Image</h2>
        <Image
          src="https://img.alicdn.com/imgextra/i1/O1CN01bPMYCT1EY2t2GVWWU_!!6000000000362-2-tps-1280-800.png"
          alt="Responsive test image"
          width={640}
          height={400}
          quality={75}
          style={{ borderRadius: '8px' }}
        />
      </section>

      <section>
        <h2>Multiple Sizes</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Image
            src="https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0DXGQ3JQo_!!6000000001643-2-tps-800-600.png"
            alt="Medium test image"
            width={320}
            height={240}
            quality={75}
            style={{ borderRadius: '8px' }}
          />
          <Image
            src="https://img.alicdn.com/imgextra/i3/O1CN01bHPMq61CVN2050oEL_!!6000000000086-2-tps-800-600.png"
            alt="Small test image"
            width={320}
            height={240}
            quality={75}
            style={{ borderRadius: '8px' }}
          />
        </div>
      </section>
    </main>
  );
}
