uniform vec2 uResolution;
uniform sampler2D uPictureTexture;
uniform sampler2D uDisplacementTexture;

attribute float aIntensity;
attribute float aAngle;

varying vec3 vColor;

void main()
{

    // Displacement
    vec3 newPosition = position;
    float displacementIntensity = texture(uDisplacementTexture, uv).r; // yolladığımız uniformu burda kullandık
    displacementIntensity = smoothstep(0.1, 0.3 ,  displacementIntensity); // canvasdaki global lighten, alpha problemei yüzünden partiküller eski haline gleimyor onu smoothsteple çzöüyoruz. ,, 0.3 olayı için desmosdan bak

    vec3 displacement = vec3(
        cos(aAngle)*0.2,
        sin(aAngle)*0.2,               
        1.0             // displacement nereye doğru yapğılacak
    );

    displacement = normalize(displacement); // Çok uçuk kaçık rakamlar olmasın 0 ile 1 arasında olsun
    displacement *= displacementIntensity;  // displacementı ekledik
    displacement *= 2.0;                    // intensity'i ekledik
    displacement *= aIntensity;             // her bir partikülün ayrı random değerde olmasını ekledik.

    newPosition += displacement;

    // Final position
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    // Picture
    float pictureIntensity = texture(uPictureTexture, uv).r;    // görselin r bilgisine eirşiyoz.

    // Point size
    gl_PointSize = 0.15 * pictureIntensity * uResolution.y;
    gl_PointSize *= (1.0 / - viewPosition.z);

    // varyings
    vColor= vec3(pow(pictureIntensity, 2.0));   // Partiküllerdeki renkler için pow kullandık
}