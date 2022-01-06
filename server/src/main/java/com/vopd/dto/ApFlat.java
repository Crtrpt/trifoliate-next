package com.vopd.dto;

import com.vopd.entity.Ap;
import com.vopd.entity.Source;
import lombok.Data;

@Data
public class ApFlat {
    Source source;
    Ap ap;

    public ApFlat(SourceDto sourceDto, Ap ap) {
        this.source=new Source(sourceDto);
        this.ap=ap;
    }
}
