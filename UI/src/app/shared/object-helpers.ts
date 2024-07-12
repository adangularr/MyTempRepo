import { SegmentItemSet, SegmentValues } from "./models";

export function createCompleteSegmentItemSet(segmentValueData: SegmentValues[]): SegmentItemSet {
    return {
        segmentValues: segmentValueData.map(value => {
            return {
                name: value.name,
                portion: value.portion,
                score: value.score
            };
        }),
        total: segmentValueData.map(value => value.score).reduce((a, b) => {
            return a + b;
        })
    };
}
