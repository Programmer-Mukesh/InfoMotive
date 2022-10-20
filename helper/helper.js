export const callPostAPIs = (input, formState) => {
  let govdata = {
    Fee: {
      general: input?.generalFee,
      OBC: input?.obcFee,
      SC: input?.scFee,
      ST: input?.stFee,
      female: input?.femaleFee,
    },
    age: {
      min: input?.minAge,
      max: input?.maxAge,
    },
    totalPostCatWise: {
      UR: input?.URPosts,
      BC: input?.BCPosts,
      MBC: input?.MBCPosts,
      EWS: input?.EWSPosts,
      SC: input?.SCPosts,
      ST: input?.STPosts,
      total: input?.totalPosts,
    },
    dispHeading: input?.dispHeading,
    descriptionURL: input?.descriptionURL,
    postName: input?.postName,
    postDate: input?.postDate,
    examDate: input?.examDate,
    lastDate: input?.lastDate,
    shortInfo: input?.shortInfo,
    admitCardAvlbl: input?.admitCardAvlbl,
    postNameShortDtl: input?.postNameShortDtl,
    totalPost: input?.totalPost,
    eligibility: input?.eligibility,
    applyLink: input?.applyLink,
    notificationLink: input?.notificationLink,
    officialWebsiteLink: input?.officialWebsiteLink,
  };
  let otherData = {
    dispHeading: input?.dispHeading,
    descriptionURL: input?.descriptionURL,
    postName: input?.postName,
    postDate: input?.postDate,
    examDate: input?.examDate,
    lastDate: input?.lastDate,
    shortInfo: input?.shortInfo,
    // admitCardAvlbl: input?.admitCardAvlbl,
    postNameShortDtl: input?.postNameShortDtl,
    totalPost: input?.totalPost,
    eligibility: input?.eligibility,
    applyLink: input?.applyLink,
    notificationLink: input?.notificationLink,
    officialWebsiteLink: input?.officialWebsiteLink,
    ctc: input?.ctc,
    hourlyPay: input?.hourlyPay,
    postDescription: input?.postDescription,
    skills: input?.skills,
    applyCriteria: input?.applyCriteria,
  };

  if (formState !== "government") {
    return otherData;
  } else {
    return govdata;
  }
};
