import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function VideoPlayer({ videoUrl, token }) {
  const videoRef = useRef(null);
  // حالة لحفظ الـ Object URL الحالي لتنظيفه لاحقًا
  const [currentObjectUrl, setCurrentObjectUrl] = useState(null); 

  useEffect(() => {
    async function fetchVideo() {
      // 1. تنظيف الـ URL القديم قبل جلب الجديد
      if (currentObjectUrl) {
        URL.revokeObjectURL(currentObjectUrl);
        setCurrentObjectUrl(null);
      }
      
      try {
        // 2. طلب الفيديو كـ Blob مع إرسال Header التوثيق
        const response = await axios.get(videoUrl, {
          responseType: "blob", 
          headers: {
            // انتبه: يجب أن يكون Bearer ${token} داخل backticks (`)
            Authorization: `Bearer ${token}`, 
          },
        });

        // 3. إنشاء Object URL محلي من الـ Blob
        // يُفضل قراءة الـ Content-Type من الـ response Headers
        const contentType = response.headers['content-type'] || 'video/mp4';
        const videoBlob = new Blob([response.data], { type: contentType });
        const newObjectUrl = URL.createObjectURL(videoBlob);
        
        // حفظ الـ URL الجديد في الحالة
        setCurrentObjectUrl(newObjectUrl);

        // 4. تعيين الـ URL لمشغل الفيديو
        if (videoRef.current) {
          videoRef.current.src = newObjectUrl;
          videoRef.current.load(); // قد تحتاجها لبدء التحميل فورًا
        }
      } catch (error) {
        console.error("❌ خطأ في تحميل الفيديو الموثق:", error);
        // يمكنك عرض رسالة خطأ للمستخدم هنا
      }
    }

    if (videoUrl && token) {
      fetchVideo();
    }
    
    // 5. دالة التنظيف (Cleanup Function)
    // تعمل عند إلغاء تحميل المكون أو عندما يتغير الـ useEffect dependencies
    return () => {
      if (currentObjectUrl) {
        URL.revokeObjectURL(currentObjectUrl);
        // لا نحتاج لتعيين setCurrentObjectUrl(null) هنا
      }
    };
    
  }, [videoUrl, token]); // يعاد التشغيل عند تغيير رابط الفيديو أو التوكن

  // المكون لا يحتاج لـ src خارجي، فقط يعتمد على الـ ref لتعبئته
  return (
    <video
      ref={videoRef}
      controls
      controlsList="nodownload"
      onContextMenu={(e) => e.preventDefault()}
      className="w-full max-h-[100vh] rounded-lg shadow"
      width="800"
    >
      <p>لا يمكن تحميل الفيديو. تأكد من اتصالك.</p>
    </video>
  );
}