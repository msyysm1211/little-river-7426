import Image from 'next/image';

export default function ImageTestPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Image Optimization Test</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Responsive Image</h2>
        <Image
          src="http://pic1.win4000.com/m00/f5/84/e3ba665109711fea2dd35b2044b30949.jpg"
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
            src="https://p0.meituan.net/imgupload/e6fa5220d85f18aa03746d8d6fe6890638080.jpg%40watermark%3D0"
            alt="Medium test image"
            width={320}
            height={240}
            quality={75}
            style={{ borderRadius: '8px' }}
          />
          <Image
            src="https://img2.baidu.com/it/u=2824166696,1668414176&fm=253&app=138&f=JPEG"
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
