uniform sampler2D uPictureTexture;

varying vec3 vColor;

void main()
{
    // Disc Pattern
    vec2 uv = gl_PointCoord;
    float distanceToCenter = distance(uv, vec2(0.5));

    if(distanceToCenter > 0.5)  // partikülleri yuvarlak yapmak için ypaıyopruz.
    discard;                // discard -> dont render

    

    gl_FragColor = vec4(vColor, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}